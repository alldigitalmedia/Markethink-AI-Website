import {
  STATUS_DEFINITIONS,
  PHASES,
  roadmapEntries,
  changeLog,
  measurementNotes,
  statusCounts,
} from "../../data/seoAioStrategy.mjs";

export const prerender = true;

const line = (value: string) => value.replace(/\r?\n/g, " ").trim();

export function GET() {
  const sections = PHASES.map((phase) => {
    const entries = roadmapEntries.filter((entry) => entry.phaseId === phase.id);
    const renderedEntries = entries.map((entry) => {
      const how = entry.how.map((step, index) => `${index + 1}. ${line(step)}`).join("\n");
      const done = entry.doneCriteria.map((criterion) => `- [ ] ${line(criterion)}`).join("\n");
      const evidence = entry.evidenceUrl
        ? `[${entry.evidenceLabel}](${entry.evidenceUrl})`
        : "No public evidence link available";
      return `## ${entry.id}: ${entry.title}

- Target window: ${entry.window}
- Status: ${entry.status}
- Target page: ${entry.targetPage}
- Verified date: ${entry.verifiedDate ?? "Not yet verified"}
- Public evidence: ${evidence}

### Why

${entry.why}

### Repeatable how

${how}

### Done criteria

${done}`;
    }).join("\n\n");
    return `# ${phase.label}: ${phase.shortLabel}\n\n${renderedEntries}`;
  }).join("\n\n");

  const definitions = STATUS_DEFINITIONS.map((status) =>
    `- ${status.label} (${statusCounts[status.label]}): ${status.definition}`,
  ).join("\n");

  const measurements = measurementNotes.map((note) => `## ${note.label}

- Current baseline: ${note.currentValue}
- Observe: ${note.measure}
- Limit: ${note.limit}
- Required fields: ${note.futureObservationRequirements.join(", ")}`
  ).join("\n\n");

  const changes = changeLog.map((change) =>
    `- ${change.date}: ${change.title}. ${change.detail}`,
  ).join("\n");

  const body = `# Markethink SEO & AIO 30-day checklist

This reusable checklist is generated from the same structured roadmap used by https://markethink.ai/seo-aio-strategy/.

AIO means improving how useful, accurate content is found and represented in AI-assisted search. This is a documented experiment, not a guaranteed ranking or citation recipe.

## Status definitions and current counts

${definitions}

${sections}

# Measurement notes

A missing baseline is Not yet measured, never zero. Future observations require a source, date, scope, and denominator.

${measurements}

# Append-only change log

${changes}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": 'attachment; filename="markethink-seo-aio-30-day-checklist.md"',
    },
  });
}
