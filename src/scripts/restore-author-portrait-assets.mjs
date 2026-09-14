import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const provenancePath = join(
  root,
  "src/assets/authors/santiago-sosa-portrait.provenance.json",
);
const provenance = JSON.parse(await readFile(provenancePath, "utf8"));
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");

const imageMetadata = (bytes) => {
  if (bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) {
    assert.equal(bytes.toString("ascii", 12, 16), "IHDR", "PNG must start with IHDR");
    return {
      mimeType: "image/png",
      width: bytes.readUInt32BE(16),
      height: bytes.readUInt32BE(20),
    };
  }

  if (bytes.toString("ascii", 0, 4) === "RIFF" && bytes.toString("ascii", 8, 12) === "WEBP") {
    const chunk = bytes.toString("ascii", 12, 16);
    if (chunk === "VP8X") {
      return {
        mimeType: "image/webp",
        width: 1 + bytes.readUIntLE(24, 3),
        height: 1 + bytes.readUIntLE(27, 3),
      };
    }
    if (chunk === "VP8L") {
      const bits = bytes.readUInt32LE(21);
      return {
        mimeType: "image/webp",
        width: 1 + (bits & 0x3fff),
        height: 1 + ((bits >> 14) & 0x3fff),
      };
    }
    if (chunk === "VP8 " && bytes.subarray(23, 26).equals(Buffer.from([0x9d, 0x01, 0x2a]))) {
      return {
        mimeType: "image/webp",
        width: bytes.readUInt16LE(26) & 0x3fff,
        height: bytes.readUInt16LE(28) & 0x3fff,
      };
    }
  }

  assert.fail("Packaged portrait must decode as PNG or WebP");
};

const records = [
  provenance.original,
  provenance.derivatives.profile,
  provenance.derivatives.avatar,
];

for (const record of records) {
  const encoded = (
    await Promise.all(
      record.encodedParts.map((path) => readFile(join(root, path), "utf8")),
    )
  )
    .join("")
    .replace(/\s+/g, "");
  const bytes = Buffer.from(encoded, "base64");
  const metadata = imageMetadata(bytes);

  assert.equal(bytes.length, record.bytes, `${record.outputPath}: byte size mismatch`);
  assert.equal(sha256(bytes), record.sha256, `${record.outputPath}: SHA-256 mismatch`);
  assert.equal(metadata.mimeType, record.mimeType, `${record.outputPath}: MIME mismatch`);
  assert.equal(metadata.width, record.width, `${record.outputPath}: width mismatch`);
  assert.equal(metadata.height, record.height, `${record.outputPath}: height mismatch`);

  const outputPath = join(root, record.outputPath);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, bytes);
}

console.log(
  `Restored ${records.length} verified Santiago Sosa portrait assets from the text-safe release package.`,
);
