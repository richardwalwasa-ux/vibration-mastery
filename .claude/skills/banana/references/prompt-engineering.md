# Prompt Engineering Reference — Banana Claude

> Load this on-demand when constructing complex prompts or when the user
> asks about prompt techniques. Do NOT load at startup.
>
> Aligned with Google's March 2026 "Ultimate Prompting Guide" for Gemini image generation.

## The 5-Component Prompt Formula

> Write as natural narrative paragraphs — NEVER as comma-separated keyword lists.

### Component 1 — SUBJECT
Who or what is the primary focus. Be specific about physical characteristics,
material, species, age, expression.

**Good:** "A weathered Japanese ceramicist in his 70s, deep sun-etched
wrinkles mapping decades of kiln work, calloused hands cradling a
freshly thrown tea bowl with an irregular, organic rim"

**Bad:** "old man, ceramic, bowl"

### Component 2 — ACTION
What the subject is doing. Use strong present-tense verbs.

**Good:** "leaning forward with intense concentration, gently smoothing
the rim with a wet thumb, a thin trail of slip running down his wrist"

**Bad:** "making pottery"

### Component 3 — LOCATION / CONTEXT
Where the scene takes place. Include environmental details, time of day,
atmospheric conditions.

**Good:** "inside a traditional wood-fired anagama kiln workshop,
stacked shelves of drying pots visible in the soft background, late
afternoon light filtering through rice paper screens"

**Bad:** "workshop, afternoon"

### Component 4 — COMPOSITION
Camera perspective, framing, and spatial relationship.

**Good:** "intimate close-up shot from slightly below eye level,
shallow depth of field isolating the hands and bowl against the
soft bokeh of the workshop behind"

**Bad:** "close up"

### Component 5 — STYLE (includes lighting)
The visual register, aesthetic, medium, and lighting combined. Reference real
cameras, film stock, photographers, publications, or art movements.

**Good:** "shot on a Fujifilm X-T4 with warm color science and natural
bokeh, warm directional light from a single high window camera-left
creating gentle Rembrandt lighting on the face with deep warm shadows.
Reminiscent of Dorothea Lange's documentary portraiture"

**Bad:** "photorealistic, 8K, masterpiece" — SEE BANNED KEYWORDS

## Domain Mode Modifier Libraries

### Cinema Mode
Camera: RED V-Raptor, ARRI Alexa 65, Sony Venice 2
Lenses: Cooke S7/i, Zeiss Supreme Prime, Atlas Orion anamorphic
Film: Kodak Vision3 500T, Fuji Eterna Vivid
Lighting: three-point, chiaroscuro, Rembrandt, split, butterfly, rim/backlight
Color grading: teal and orange, desaturated cold, warm vintage, high-contrast noir

### Product Mode
Surfaces: polished marble, brushed concrete, raw linen, acrylic riser
Lighting: softbox diffused, hard key with fill card, rim separation, tent lighting
Angles: 45-degree hero, flat lay, three-quarter, straight-on, worm's-eye
Style refs: Apple product photography, Aesop minimal, Bang & Olufsen clean

### Portrait Mode
Focal lengths: 85mm (classic), 105mm (compression), 135mm (telephoto)
Apertures: f/1.4 (dreamy bokeh), f/2.8 (subject-sharp), f/5.6 (environmental)
Skin/texture: freckles visible, pores at macro distance, catch light in eyes

### Editorial/Fashion Mode
Publication refs: Vogue Italia, Harper's Bazaar, GQ, National Geographic, Kinfolk
Locations: marble staircase, rooftop at golden hour, industrial loft, desert dunes

### UI/Web Mode
Styles: flat vector, isometric 3D, glassmorphism, neumorphism, material design
Specify exact hex colors (e.g., "cool blues #2563EB to #1E40AF")

### Logo Mode
Construction: geometric primitives, golden ratio, negative space
Output: request on solid white background for later transparency

### Landscape Mode
Depth: foreground interest, midground subject, background atmosphere
Atmospherics: fog, mist, volumetric light rays
Time of day: blue hour, golden hour, magic hour, midnight blue

### Infographic Mode
Layout: modular sections, clear visual hierarchy, bento grid
Text: use quotes for exact text, specify size hierarchy
Colors: high-contrast, accessible palette

### Abstract Mode
Geometry: fractals, voronoi tessellation, spirals, organic flow, crystalline
Textures: marble veining, fluid dynamics, smoke wisps, ink diffusion

## ❌ BANNED PROMPT KEYWORDS — NEVER USE THESE

The Nano Banana model's internal system prompt explicitly penalizes these:

NEVER include:
- "4k" / "8k" / "ultra HD" / "high resolution"
- "masterpiece"
- "highly detailed" / "ultra detailed"
- "trending on artstation"
- "hyperrealistic" / "ultra realistic"
- "photorealistic"
- "best quality"
- "award winning"

USE INSTEAD (prestigious context anchors):
- "Pulitzer Prize-winning cover photograph"
- "Vanity Fair editorial portrait"
- "National Geographic cover story"
- "WIRED magazine feature spread"
- "Architectural Digest interior"
- "Magnum Photos documentary"

## Positive Framing (No Negative Prompts)

Gemini does NOT support negative prompts. Rephrase exclusions:
- Instead of "no blur" → "sharp, in-focus, tack-sharp detail"
- Instead of "no people" → "empty, deserted, uninhabited"
- Instead of "no text" → "clean, uncluttered, text-free"
- Instead of "not dark" → "brightly lit, high-key lighting"

For critical constraints, ALL CAPS emphasis improves adherence:
- "MUST contain exactly three figures"
- "NEVER include any visible horizon line"

## Text Rendering Tips

- Quote exact text: `with the text "OPEN DAILY" in bold condensed sans-serif`
- **25 characters or less** — practical limit for reliable rendering
- **2-3 distinct phrases max**
- Specify placement: "centered at the top third", "along the bottom edge"
- High contrast: light text on dark, or vice versa

## Prompt Length Guide

| Use case | Target length |
|----------|--------------|
| Quick draft | 20–60 words |
| Standard generation | 100–200 words |
| Complex professional | 200–300 words |
| Maximum specification | Up to 2,600 tokens |

## Safety Filter Rephrase Strategies

| Category | Triggers on | Rephrase approach |
|----------|------------|-------------------|
| Violence/weapons | Combat, blood, firearms | Use aftermath: "battle-worn" → "weathered veteran" |
| Real public figures | Named celebrities | Use archetypes: "a tech entrepreneur in a minimalist office" |
| NSFW/suggestive | Revealing clothing, intimate poses | "fashion editorial, fully clothed, editorial pose" |

## Key Tactics

1. Name real cameras: "Sony A7R IV", "Canon EOS R5", "iPhone 16 Pro Max"
2. Specify exact lens: "85mm f/1.4" gives precise depth-of-field information
3. Use age + features: "24yo with olive skin, hazel eyes" beats "a person"
4. Name brands for styling: "Lululemon mat", "Tom Ford suit"
5. Include micro-details: "sweat droplets on collarbones", "baby hairs stuck to neck"
6. Describe textures: "crinkle-textured", "metallic silver", "frosted glass"
7. For products, say "prominently displayed"

## Proven Templates

### Instagram Ad / Social Media
```
Hyper-realistic gym selfie of athletic 24yo influencer with glowing olive
skin, wearing crinkle-textured athleisure set in mauve. iPhone 16 Pro Max
front-facing portrait mode capturing sweat droplets on collarbones, hazel
eyes enhanced by gym LED lighting. Mirror reflection shows perfect form,
golden morning light through floor-to-ceiling windows. Frayed chestnut
ponytail with baby hairs, visible skin texture with natural erythema from
workout. Vanity Fair wellness editorial aesthetic.
```

### Product / Commercial
```
Gatorade bottle with condensation dripping down the sides, surrounded by
lightning bolts and a burst of vibrant blue and orange light rays. The
Gatorade logo is prominently displayed on the bottle, with splashes of
water frozen in mid-air. Commercial food photography for an advertising
campaign, vibrant complementary colors. Bon Appetit magazine cover aesthetic.
```

### SaaS / Tech Marketing
```
A floating glassmorphism UI card on a deep charcoal background showing a
content analytics dashboard with a rising line graph in teal (#14B8A6),
bar charts in coral (#F97316), and a circular progress indicator at 94%.
Subtle grid lines, frosted glass effect with 20% opacity, teal glow
bleeding from the card edges. Clean premium SaaS aesthetic, no text
smaller than headline size.
```
