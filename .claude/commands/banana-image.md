# Banana Claude AI Image Generation

Generate images using the Banana AI image generation MCP server.

## How to use

Run `/banana-image <description>` with a prompt describing the image you want.

**Examples:**
- `/banana-image a glowing purple chakra mandala with golden energy spirals`
- `/banana-image serene meditation garden at sunrise, soft light, photorealistic`
- `/banana-image abstract vibration waves in deep violet and teal, digital art`

## Steps

1. Call `models_explore` with `action: "recommend"` and the user's prompt as the query to find the best model.
2. Call `generate_image` with the recommended model and the user's prompt.
3. Display the generated image(s) to the user.

If `structuredContent.recovery_tool` is returned, call that tool immediately with `structuredContent.recovery_tool_args`.

## Model selection guidance

- For high-quality portraits or artistic images → `soul_2`
- For 4K quality, text in image, or diagrams → `nano_banana_pro`
- For product/commercial/marketing visuals → `marketing_studio_image`
- For text-only character/avatar → `soul_cast`
- When unsure → call `models_explore` with `action: "recommend"` and describe the goal

## Notes

- Default count is 1; user can request up to 4 images.
- Use `get_cost: true` to preflight credit cost before generating if the user asks how much it will cost.
- Check balance with the `balance` tool if credits seem insufficient.
