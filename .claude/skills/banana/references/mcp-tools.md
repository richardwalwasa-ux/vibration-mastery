# MCP Tools Reference — @ycse/nanobanana-mcp

> Package: `@ycse/nanobanana-mcp`

## Tools

### gemini_generate_image
Generate an image from a text prompt.

**Parameters:**
| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `prompt` | string | Yes | Text description of the image to generate |

**Returns:** Image data + file path (saved to `~/Documents/nanobanana_generated/`)

### gemini_edit_image
Edit an existing image with text instructions.

**Parameters:**
| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `imagePath` | string | Yes | Path to the image file to edit |
| `prompt` | string | Yes | Edit instructions |

### gemini_chat
Multi-turn visual conversation maintaining session context.

**Parameters:**
| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `message` | string | Yes | Chat message (can reference previous images) |

**Key feature:** Session consistency — maintains style, characters, and context across turns.

### set_aspect_ratio
Configure the aspect ratio for subsequent image generations.

**Parameters:**
| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `ratio` | string | Yes | e.g., "16:9", "1:1", "9:16" |

### set_model
Switch the active Gemini model.

**Parameters:**
| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `model` | string | Yes | Model identifier |

**Available models:**
- `gemini-3.1-flash-image-preview` (default — Nano Banana 2)
- `gemini-2.5-flash-image` (stable fallback — Nano Banana original)

### get_image_history
Retrieve list of images generated in the current session. No parameters.

### clear_conversation
Reset session context and conversation history. No parameters.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GOOGLE_AI_API_KEY` | Yes | API key from https://aistudio.google.com/apikey |
| `NANOBANANA_MODEL` | No | Override default model |

## Output Directory
All generated images saved to: `~/Documents/nanobanana_generated/`

## ❌ Parameters That Do NOT Exist

These are silently ignored — do not pass them:
- `numberOfImages` / `n` / `sampleCount` — Gemini generates ONE image per call
- `negativePrompt` — use semantic reframing instead
- `output_mime_type` — Vertex AI only
- `candidate_count` — only 1 supported
- `seed` — not supported

## ImageConfig Parameter Reference

| Parameter | Valid values | Critical notes |
|-----------|-------------|----------------|
| `aspect_ratio` | "1:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9", "1:4"*, "4:1"*, "1:8"*, "8:1"* | * = Nano Banana 2 only |
| `image_size` | "512"*, "1K", "2K"*, "4K"* | MUST be uppercase. "2k" silently fails |
| `person_generation` | "ALLOW_ALL", "ALLOW_ADULT", "ALLOW_NONE" | ALLOW_ALL restricted in EU/UK |

## Error Response Taxonomy

| Error | Cause | Response |
|-------|-------|----------|
| HTTP 429 | Rate limit | Exponential backoff, max 3 retries |
| HTTP 400 FAILED_PRECONDITION | Billing not enabled | Direct user to enable billing |
| `IMAGE_SAFETY` | Content policy block | Rephrase, offer 2-3 alternatives |
| Empty `parts` | Wrong `response_modalities` | Must include "IMAGE" |
