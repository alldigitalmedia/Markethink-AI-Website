import { getStandaloneMarkdown, PLAYBOOK_META } from "../../data/strategyLibrary.mjs";

export const prerender = true;

export function GET() {
  return new Response(getStandaloneMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": `attachment; filename="${PLAYBOOK_META.portableName}.md"`,
      "Link": `<${PLAYBOOK_META.canonical}>; rel="canonical"`,
      "X-Content-Type-Options": "nosniff",
    },
  });
}
