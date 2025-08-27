# Kernel Equity Color Palette Style Guide

## Color Scale Usage Guidelines

### Timberwolf (#dad7cd)
**Role:** Neutral background + typography balance

**Use for:**
- Light backgrounds (cards, About Us section)
- Body copy on dark backgrounds (use 500+)
- Subtle dividers/borders (200–400)

**Scales:**
- `100–400` = darker taupes for text over light backgrounds
- `500` = base neutral
- `600–900` = progressively lighter backgrounds

### Sage (#a3b18a)
**Role:** Soft supporting accent (calm, approachable)

**Use for:**
- Background fills for info cards
- Secondary buttons or hover states
- Highlights for "in-progress" or "supporting" statuses

**Scales:**
- `300–400` for text/icons on dark hunter/brunswick backgrounds
- `600–700` for badges or subtle highlights
- `800–900` for light tints behind content

### Fern Green (#588157)
**Role:** Mid-tone green, good for secondary CTAs and UI accents

**Use for:**
- Buttons (secondary, outline, hover fill)
- Navigation highlights / card hover states
- Accent lines or icons in diagrams

**Scales:**
- `100–300` for very dark green text on parchment/timberwolf backgrounds
- `500` = main fern base
- `600–800` for softer backgrounds and gradients

### Hunter Green (#3a5a40)
**Role:** Primary brand anchor

**Use for:**
- Hero and footer backgrounds
- Main CTAs
- Strong headers, brand typography accents

**Scales:**
- `100–300` = darkest shades (text on parchment, deep backgrounds)
- `500` = true hunter base
- `600–700` for hover states, lighter accents
- `800–900` for pale backgrounds behind content

### Brunswick Green (#344e41)
**Role:** Deep supporting green, pairs with Hunter for depth

**Use for:**
- Section splits (e.g., alternating Market Solutions / Approach)
- Sidebars, navigation backgrounds
- Muted dark-mode surfaces

**Scales:**
- `100–300` = near-black shades for text
- `500` = Brunswick base
- `600–700` for hover/active states
- `800–900` for soft background layers

## Implementation Rules

1. **Always use appropriate scales** - Don't use base colors (500) everywhere
2. **Text contrast** - Use darker scales (100-400) for text on light backgrounds
3. **Background hierarchy** - Use lighter scales (600-900) for background layers
4. **Interactive states** - Use mid-range scales (400-700) for hover/active states
5. **Accessibility** - Ensure proper contrast ratios between text and background colors

## CSS Variable Naming Convention

```css
--timberwolf-100: #312e24;    /* Darkest */
--timberwolf-500: #dad7cd;    /* Base */
--timberwolf-900: #f8f7f5;    /* Lightest */

--sage-300: #64724c;          /* Dark for text */
--sage-500: #a3b18a;          /* Base */
--sage-800: #dae0d0;          /* Light for backgrounds */

/* And so on for all colors... */
```
