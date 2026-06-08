# Cost Tracking Reference

> Load this on-demand when the user asks about costs or before batch operations.

## Pricing Table

| Model | Resolution | Cost/Image |
|-------|-----------|-----------|
| 3.1 Flash | 512 | $0.020 |
| 3.1 Flash | 1K | $0.039 |
| 3.1 Flash | 2K | $0.078 |
| 3.1 Flash | 4K | $0.156 |
| 2.5 Flash | 1K | $0.039 |
| Batch API | Any | 50% of above |

Pricing is approximate. Verify at https://ai.google.dev/gemini-api/docs/pricing

## Free Tier Limits

- ~10 requests per minute (RPM)
- ~500 requests per day (RPD)
- Per Google Cloud project, resets midnight Pacific

## Cost Tracker Commands

```bash
# Log a generation
python3 .claude/skills/banana/scripts/cost_tracker.py log --model gemini-3.1-flash-image-preview --resolution 1K

# View summary
python3 .claude/skills/banana/scripts/cost_tracker.py summary

# Today's usage
python3 .claude/skills/banana/scripts/cost_tracker.py today

# Estimate before batch
python3 .claude/skills/banana/scripts/cost_tracker.py estimate --model gemini-3.1-flash-image-preview --resolution 1K --count 10

# Reset ledger
python3 .claude/skills/banana/scripts/cost_tracker.py reset --confirm
```

## Storage

Ledger stored at `~/.banana/costs.json`. Created automatically on first use.
