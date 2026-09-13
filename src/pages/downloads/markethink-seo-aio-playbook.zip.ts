import { createDeterministicSkillZip, PLAYBOOK_META } from "../../data/strategyLibrary.mjs";

export const prerender = true;

export function GET() {
  return new Response(new Uint8Array(createDeterministicSkillZip()), {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${PLAYBOOK_META.portableName}.zip"`,
      "X-Content-Type-Options": "nosniff",
    },
  });
}
