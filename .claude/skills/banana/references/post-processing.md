# Post-Processing Reference

> Load this on-demand when the user asks about editing, compositing, or post-processing.

## Image Editing via gemini_edit_image

Edit an existing image by providing the file path and natural language instructions.

**Supported operations:**
- Background removal / replacement
- Color grading and tone adjustments
- Adding or removing elements
- Style transfer
- Text overlay (follow text rendering rules — max 25 chars)
- Compositing multiple images

**Usage pattern:**
```
User: "Remove the background from this photo"
→ Claude calls gemini_edit_image with:
    imagePath: "/path/to/image.png"
    prompt: "Remove the background, keep only the subject on a clean white background"
```

## Multi-Image Composition

For Nano Banana 2, provide up to 14 reference images via `gemini_chat`:
- 10 for object/style references
- 4 for character references

**Character consistency across edits:**
```
# First message — establish character
gemini_chat: "This is Character A: [description with 3-4 reference images]"

# Subsequent messages — reference by name
gemini_chat: "Generate Character A holding a coffee cup in a modern office"
```

## Green Screen Workaround

Gemini always generates images with a background (no transparency support).
For transparent background needs:
1. Generate on a solid bright green (#00FF00) or blue (#0000FF) background
2. Use your image editor to key out the color
3. Or instruct: "on a solid pure white background" for easier masking

## Format Notes

- Output format: PNG
- Color space: sRGB
- SynthID watermarks always embedded (invisible, machine-readable)
- C2PA metadata included on paid outputs

## Batch Variations with /banana batch

Generate N variations using rotating components:

```
/banana batch "luxury watch product shot" 4
```

Claude will generate 4 variations by rotating:
- Aspect ratios (1:1, 16:9, 4:5, 3:4)
- Lighting setups (golden hour, studio, dramatic shadow, soft diffused)
- Color grading (warm, cool, neutral, high contrast)
- Composition angles (hero 45°, flat lay, worm's-eye, overhead)
