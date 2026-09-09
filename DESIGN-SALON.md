---
#Drybar Salon - Style Reference

version: alpha
name: Drybar
description: >-
  Premium hair care and blowout services brand combining salon expertise with accessible luxury. Drybar's design system
  balances sophisticated minimalism with warm, approachable typography to communicate professional quality and
  effortless elegance.
logo:
  src: https://www.drybar.com/static/version1787129049/frontend/MagebitHoT/drybar/en_US/images/logo.svg
colors:
  surface: '#ffffff'
  surface-dim: '#f9f4f2'
  surface-bright: '#ffffff'
  surface-container-lowest: '#f7f8f9'
  surface-container-low: '#f5f5f5'
  surface-container: '#f0f0f0'
  surface-container-high: '#e9ecef'
  surface-container-highest: '#d9d9d9'
  on-surface: '#42413d'
  on-surface-variant: '#767676'
  inverse-surface: '#1a1a1a'
  inverse-on-surface: '#ffffff'
  outline: '#949494'
  outline-variant: '#b7b8b9'
  surface-tint: '#42413d'
  primary: '#ffdd30'
  on-primary: '#000000'
  primary-container: '#fff0d9'
  on-primary-container: '#42413d'
  inverse-primary: '#ffdd30'
  secondary: '#5191a9'
  on-secondary: '#ffffff'
  secondary-container: '#d4e8f0'
  on-secondary-container: '#0d3a4a'
  tertiary: '#419a2d'
  on-tertiary: '#ffffff'
  tertiary-container: '#c8e6c1'
  on-tertiary-container: '#1b5e0f'
  error: '#ad0000'
  on-error: '#ffffff'
  error-container: '#ffb4ab'
  on-error-container: '#410002'
  primary-fixed: '#ffdd30'
  primary-fixed-dim: '#f0c800'
  on-primary-fixed: '#000000'
  on-primary-fixed-variant: '#42413d'
  secondary-fixed: '#b3dce8'
  secondary-fixed-dim: '#97c8d8'
  on-secondary-fixed: '#001f2a'
  on-secondary-fixed-variant: '#0d3a4a'
  tertiary-fixed: '#b3e5a0'
  tertiary-fixed-dim: '#99d087'
  on-tertiary-fixed: '#0b3a00'
  on-tertiary-fixed-variant: '#1b5e0f'
  background: '#ffffff'
  on-background: '#42413d'
  surface-variant: '#949494'
typography:
  display:
    fontFamily: korolev
    fontSize: 60px
    fontWeight: '700'
    lineHeight: 68px
    letterSpacing: '-0.04em'
  headline-lg:
    fontFamily: korolev
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: '-0.02em'
  headline-md:
    fontFamily: korolev
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: '-0.01em'
  title-lg:
    fontFamily: poppins
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: poppins
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: poppins
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-md:
    fontFamily: poppins
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: poppins
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 4px
  DEFAULT: 0px
  md: 10px
  lg: 14px
  xl: 16px
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  container-max: 1280px
elevation:
  sm: 0 1px 2px rgba(0, 0, 0, 0.06)
  md: 0 3px 8px rgba(0, 0, 0, 0.15)
  lg: 0 8px 24px rgba(0, 0, 0, 0.12)
layout:
  containerMaxWidth: 1280px
  gridColumns: 12
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.DEFAULT}'
    padding: 11px 30px
    height: 48px
    fontWeight: '500'
  button-primary-hover:
    backgroundColor: '{colors.primary-fixed-dim}'
    textColor: '{colors.on-primary}'
  button-secondary:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.on-secondary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.DEFAULT}'
    padding: 12px 24px
    height: 48px
    fontWeight: '700'
  button-secondary-hover:
    backgroundColor: '#3d7a8a'
  button-ghost:
    backgroundColor: transparent
    textColor: '{colors.on-surface}'
    typography: '{typography.label-md}'
    rounded: '{rounded.DEFAULT}'
    padding: 12px 24px
    height: 48px
    border: 1px solid {colors.outline}
  button-ghost-hover:
    backgroundColor: '{colors.surface-container-high}'
  card:
    backgroundColor: '{colors.surface}'
    rounded: '{rounded.md}'
    padding: '{spacing.md}'
    boxShadow: '{elevation.md}'
  card-hover:
    backgroundColor: '{colors.surface-container-low}'
    boxShadow: '{elevation.lg}'
  input-field:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.DEFAULT}'
    padding: 8px 16px
    border: 1px solid {colors.outline-variant}
    height: 40px
  input-field-focus:
    borderColor: '{colors.on-surface}'
    outlineWidth: 2px
    outlineStyle: auto
    outlineColor: '{colors.on-surface}'
  list-item:
    backgroundColor: transparent
    rounded: '{rounded.md}'
    padding: '{spacing.sm}'
    typography: '{typography.body-md}'
  list-item-hover:
    backgroundColor: '{colors.surface-container-high}'
    textColor: '{colors.primary}'
  badge:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.full}'
    padding: 4px 12px
  modal-overlay:
    backgroundColor: rgba(0, 0, 0, 0.5)
    backdropFilter: blur(4px)
  modal-content:
    backgroundColor: '{colors.surface}'
    rounded: '{rounded.lg}'
    padding: '{spacing.lg}'
    boxShadow: '{elevation.lg}'
    border: 4px solid {colors.primary}
---

## Overview

Drybar is a premium hair care and blowout service brand that embodies 'Accessible Luxury Minimalism'—a design philosophy that strips away unnecessary ornamentation to reveal refined, functional elegance. The visual identity prioritizes clarity and confidence through a restrained color palette anchored by a vibrant golden-yellow accent (#ffdd30), warm neutral grounds (#42413d on #ffffff), and supporting teal accents (#5191a9). The UI evokes a high-end salon experience: clean, uncluttered, and focused on the user's journey from discovery to booking. The emotional response is one of calm professionalism mixed with approachable warmth—never sterile, never fussy.

Drybar's voice is expert yet conversational, precise yet personable. The brand speaks in short, declarative sentences that convey salon wisdom without pretension. Vocabulary leans toward tangible benefits ("salon-quality results," "nourish & soften") and sensory language ("silky," "detox"). Example sentence in brand voice: "Detox Silk™ shampoo nourishes while you refresh—no blowout required."

## Colors

The color system is built on a foundation of pristine white (#ffffff) and warm charcoal (#42413d), creating a high-contrast, legible canvas. Primary accent is golden-yellow (#ffdd30), used exclusively for call-to-action buttons, promotional badges, and key interactive states—this color commands attention and signals action without aggression. Secondary accent is a sophisticated teal (#5191a9), deployed for secondary buttons, links, and supporting UI elements to add depth and visual rhythm. Tertiary green (#419a2d) is reserved for success states and affirmative messaging. The surface stack progresses from pure white (surface) through light grays (#f9f4f2, #f5f5f5, #f0f0f0) to mid-grays (#d9d9d9), providing subtle visual separation without harsh contrast. Error red (#ad0000) is used sparingl

## Typography

The type system pairs two distinct typefaces to communicate hierarchy and personality. Korolev (700–900 weight) is reserved for display, headlines, and brand-forward moments—its geometric, confident letterforms anchor the visual identity and command attention at large sizes (40px–60px). Poppins (400–700 weight) serves as the workhorse for body copy, labels, and UI text, offering excellent readability at 14px–18px and a friendly, approachable tone that softens Korolev's boldness. Display text (60px, 700 weight, -0.04em letter-spacing) is used for hero statements; headline-lg (40px, 700 weight) for section titles; body-md (16px, 400 weight, 24px line-height) for standard paragraph text. On small labels over busy backgrounds (e.g., badges on product images), apply text-shadow: 0 2px 4px rgba(

## Layout

The page grid is fluid and responsive, built on a 12-column system with a maximum container width of 1280px. Horizontal spacing uses a semantic scale: gutter (24px) for standard section padding, lg (40px) for major section separation, and md (24px) for card-to-card spacing within containers. Vertical rhythm is established through consistent use of lg (40px) between major sections and md (24px) between subsections, creating a calm, scannable hierarchy. The hero section spans full width with generous padding (60px vertical on desktop, 40px on tablet) to establish breathing room. Product cards and content blocks use md (24px) internal padding with md (10px) border-radius for a soft, approachable feel. White-space is treated as a design element—never cramped, always intentional. Containers mai

## Elevation & Depth

Visual hierarchy is conveyed through a restrained shadow system and subtle background color shifts rather than aggressive depth. Level 1 (Base): flat surfaces on white (#ffffff) with no shadow, representing the primary content plane. Level 2 (Elevated Cards): box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15) with background-color: #f5f5f5 or #f0f0f0, creating gentle separation from the base. Level 3 (Modals & Overlays): box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12) with a 4px solid border in primary-yellow (#ffdd30) and background-color: #ffffff, signaling prominence and user focus. Hover states on cards

## Shapes

The shape philosophy is 'Refined Geometry'—sharp where it matters, soft where it breathes. Buttons and primary interactive elements use 0px border-radius (sharp corners) to convey precision and confidence, aligning with the brand's salon-expert positioning. Cards and secondary containers use 10px border-radius (md) for a slightly approachable feel without sacrificing sophistication. Modals and elevated surfaces use 14px–16px border-radius (lg–xl) to create visual softness and reduce perceived harshness. Input fields and form elements use 0px border-radius to maintain visual consistency with bu

## Components

### Action Elements
Buttons are the primary affordance for user intent. Primary buttons use background-color: #ffdd30 with color: #000000, fontWeight: 500, padding: 11px 30px, and height: 48px. On hover, shift background to #f0c800 (darker, more saturated) and maintain black text. Secondary buttons use background-color: #5191a9 with color: #ffffff, fontWeight: 700, padding: 12px 24px, and height: 48px; on hover, darken to #3d7a8a. Ghost buttons (tertiary) use transparent background with 1px solid border in #949494 and text-color: #42413d; on hover, apply background-color: #e9ecef. All buttons use border-radius: 0px and transition: background-color 200ms ease-in-out for smooth state changes. Focus states apply outline-width: 2px, outline-style: auto, outline-color: #000000, outline-offset:

## Do's and Don'ts

**Do**
- Do use primary-yellow (#ffdd30) exclusively for primary CTAs, promotional badges, and key interactive states—it is the brand's signature accent and must never be diluted or overused.
- Do maintain sharp corners (0px border-radius) on buttons and inputs to reinforce the brand's professional, expert positioning and functional aesthetic.
- Do apply generous white-space (lg/40px between sections, md/24px within cards) to create a calm, premium feel and improve scannability.
- Do pair Korolev (bold, geometric) with Poppins (friendly, readable) to balance confidence with approachability—never use Korolev for body copy or Poppins for display headlines.
- Do use the secondary teal (#5191a9) for secondary buttons and supporting UI elements to add visual rhythm without competing with primary-yellow.
- Do apply consistent shadow depths (md for cards, lg for modals) to create clear visual hierarchy without excessive depth effects.

**Don't**
- Don't use primary-yellow on backgrounds where black text cannot achieve WCAG AA contrast (4.5:1 minimum)—always pair #ffdd30 with #000000 at 500+ fontWeight.
- Don't apply border-radius > 0px to primary buttons or input fields—sharp corners are essential to the brand's refined, functional identity.
- Don't mix Korolev and Poppins weights arbitrarily; reserve Korolev 700–900 for headlines and Poppins 400–700 for body and UI text.
- Don't use more than three accent colors in a single interface—primary-yellow, secondary-teal, and tertiary-green are sufficient; resist adding arbitrary brand colors.
- Don't exceed 24px blur radius on shadows or use shadows with opacity > 15%—the brand favors subtlety and premium restraint over dramatic depth.
- Don't reduce padding below md (24px) on cards or containers—white-space is a core design principle and must never be sacrificed for content density.
