# Gemini Image Generation Models

> Last updated: 2026-03-19

## Available Models

### gemini-3.1-flash-image-preview — Nano Banana 2 (DEFAULT)

| Property | Value |
|----------|-------|
| **Model ID** | `gemini-3.1-flash-image-preview` |
| **Status** | Preview — **Active, recommended default** |
| **Speed** | Fast |
| **Aspect Ratios** | All 14 ratios including extreme: 1:4, 4:1, 1:8, 8:1 |
| **Max Resolution** | Up to 4096×4096 (4K tier) |
| **Input Tokens** | 131,072 |
| **Features** | Google Search grounding, thinking levels, extreme aspect ratios |
| **Rate Limits (Free)** | ~5-15 RPM / ~20-500 RPD |
| **Best For** | All standard production generation and editing |

### gemini-2.5-flash-image — Nano Banana (Original)

| Property | Value |
|----------|-------|
| **Model ID** | `gemini-2.5-flash-image` |
| **Status** | GA — **Active** |
| **Aspect Ratios** | 1:1, 16:9, 9:16, 4:3, 3:4, 2:3, 3:2, 4:5, 5:4, 21:9 (10 ratios) |
| **Max Resolution** | Up to 1024×1024 (1K tier) |
| **Best For** | Free-tier users, budget-conscious workflows |
| **Cost** | ~$0.039/image at 1K |

## ⛔ DEPRECATED — gemini-3-pro-image-preview

**Shut down by Google on March 9, 2026.** Do not use. Replace with `gemini-3.1-flash-image-preview`.

## Domain-to-Model Routing

| Domain Mode | Recommended Model |
|---|---|
| Cinema, Landscape, Abstract | Nano Banana 2 (`gemini-3.1-flash-image-preview`) |
| Product, Portrait | Nano Banana 2 |
| UI, Infographic | Nano Banana 2 |
| Logo | Nano Banana 2 |
| Free tier / budget | Nano Banana original (`gemini-2.5-flash-image`) |

## Resolution Defaults by Domain

| Domain | Default `imageSize` |
|--------|-------------------|
| Portrait, Product, Logo | `2K` |
| Cinema, Landscape | `2K` |
| UI, Infographic | `1K` |
| Quick draft | `512` (Nano Banana 2 only) |
| Print / high fidelity | `4K` |

## Aspect Ratios

| Ratio | Use Cases | NB2 (3.1 Flash) | NB (2.5 Flash) |
|-------|-----------|:---:|:---:|
| `1:1` | Social posts, avatars | ✅ | ✅ |
| `16:9` | Blog headers, presentations | ✅ | ✅ |
| `9:16` | Stories, Reels, TikTok | ✅ | ✅ |
| `4:3` | Product shots | ✅ | ✅ |
| `3:4` | Book covers | ✅ | ✅ |
| `2:3` | Pinterest, posters | ✅ | ✅ |
| `3:2` | DSLR standard | ✅ | ✅ |
| `4:5` | Instagram portrait | ✅ | ✅ |
| `5:4` | Large format | ✅ | ✅ |
| `21:9` | Cinematic, ultra-wide | ✅ | ✅ |
| `1:4` | Vertical banners | ✅ | ❌ |
| `4:1` | Website banners | ✅ | ❌ |
| `1:8` | Narrow vertical strips | ✅ | ❌ |
| `8:1` | Ultra-wide banners | ✅ | ❌ |

## Resolution Tiers

| `imageSize` | Pixel Range | Availability |
|-------------|-------------|-------------|
| `512` | Up to 512×512 | Nano Banana 2 only |
| `1K` | Up to 1024×1024 | All models |
| `2K` | Up to 2048×2048 | Nano Banana 2 only |
| `4K` | Up to 4096×4096 | Nano Banana 2 only |

⚠️ `imageSize` MUST be UPPERCASE — `"2k"` is silently ignored.

## Pricing

| Model | Resolution | Cost/Image |
|-------|-----------|-----------|
| NB2 (3.1 Flash) | 1K | ~$0.067 |
| NB2 (3.1 Flash) | 2K | ~$0.134 |
| NB2 (3.1 Flash) | 4K | ~$0.268 |
| NB (2.5 Flash) | 1K | ~$0.039 |
| Batch API | Any | 50% discount |

## Safety Filters

| `finishReason` | Meaning | Retryable? |
|----------------|---------|:----------:|
| `STOP` | Successful generation | N/A |
| `IMAGE_SAFETY` | Output blocked | Rephrase prompt |
| `PROHIBITED_CONTENT` | Policy violation | No |
| `SAFETY` | General safety block | Rephrase prompt |
| `RECITATION` | Copyrighted content | Rephrase prompt |

## Key Limitations

- No transparent backgrounds (PNG always with background)
- Text rendering best under 25 characters
- Gemini generates ONE image per API call — no batch parameter
- No negative prompt parameter — use semantic reframing
- `imageSize` values MUST be uppercase
- Session context resets between Claude Code conversations
