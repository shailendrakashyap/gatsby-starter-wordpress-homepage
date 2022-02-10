import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css.ts"
import { media } from "./ui.css"

export const statList = style({
  "@media": {
    [media.small]: {
      gap: theme.space[6],
    },
  },
})

export const statContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media": {
    [media.small]: {
      alignItems: "flex-start",
    },
  },
})

export const statHeader = style({
  fontFamily: theme.fonts.mono,
  fontWeight: theme.fontWeights.medium,
  lineHeight: theme.lineHeights.tight,
  fontSize: theme.fontSizes[6],
  margin: 0,
})

export const statKicker = style({
  fontSize: theme.fontSizes[3],
  lineHeight: theme.lineHeights.text,
  fontWeight: theme.fontWeights.bold,
})
