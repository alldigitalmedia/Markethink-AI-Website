import { createDeterministicLaunchSkillZip, WEBSITE_LAUNCH_META } from "../../data/websiteLaunchChecklist.mjs";

export const prerender = true;

export function GET() {
  return new Response(new Uint8Array(createDeterministicLaunchSkillZip()), {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${WEBSITE_LAUNCH_META.portableName}.zip"`,
      "X-Content-Type-Options": "nosniff",
    },
  });
}
