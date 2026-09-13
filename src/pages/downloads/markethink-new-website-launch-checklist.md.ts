import { getLaunchStandaloneMarkdown, WEBSITE_LAUNCH_META } from "../../data/websiteLaunchChecklist.mjs";

export const prerender = true;

export function GET() {
  return new Response(getLaunchStandaloneMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": `attachment; filename="${WEBSITE_LAUNCH_META.portableName}.md"`,
      "Link": `<${WEBSITE_LAUNCH_META.canonical}>; rel="canonical"`,
      "X-Content-Type-Options": "nosniff",
    },
  });
}
