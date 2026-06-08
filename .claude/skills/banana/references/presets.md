# Brand/Style Presets Reference

> Load this on-demand when the user asks about presets or brand consistency.

## Preset Schema

Each preset stored as `~/.banana/presets/NAME.json`:

```json
{
  "name": "tech-saas",
  "description": "Clean tech SaaS brand",
  "colors": ["#2563EB", "#1E40AF", "#F8FAFC"],
  "style": "clean minimal tech illustration, flat vectors, soft shadows",
  "typography": "bold geometric sans-serif",
  "lighting": "bright diffused studio, no harsh shadows",
  "mood": "professional, trustworthy, modern",
  "default_ratio": "16:9",
  "default_resolution": "2K"
}
```

## Example Presets

### tech-saas
- Colors: #2563EB, #1E40AF, #F8FAFC (blue + white)
- Style: Clean minimal tech illustration, flat vectors, soft shadows
- Mood: Professional, trustworthy, modern

### luxury-brand
- Colors: #1A1A1A, #C9A96E, #FAFAF5 (black + gold + cream)
- Style: Elegant high-end photography, rich textures, deep contrast
- Mood: Exclusive, sophisticated, aspirational

### editorial-magazine
- Colors: #000000, #FFFFFF, #FF3B30 (black + white + accent red)
- Style: Bold editorial photography, strong geometric composition
- Mood: Bold, provocative, contemporary

## How Presets Merge into Reasoning Brief

1. **Colors** → inform palette in Context and Style components
2. **Style** → becomes base for the Style component
3. **Typography** → used for any text rendering
4. **Lighting** → becomes base for the Lighting component
5. **Mood** → influences Action and Context components

User instructions always override preset values.
