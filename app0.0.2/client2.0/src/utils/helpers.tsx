import * as React from "react"
import { css } from "styled-components"
import Link from "next/link"
import { motion } from "framer-motion"

interface Size {
  small: number
  smallMedium: number
  medium: number
  large: number
  xLarge: number
}

const size: Size = {
  small: 500,
  smallMedium: 620,
  medium: 960,
  large: 1140,
  xLarge: 1400,
} as const

type CssParams = Parameters<typeof css>
type StyleFnMap = Record<keyof Size, (...args: CssParams) => any>

const typedKeys = <T extends {}>(obj: T) => Object.keys(obj) as Array<keyof T>

export const below = typedKeys(size).reduce((acc, label: keyof Size) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {} as StyleFnMap)

// Object.keys() is typed as `string[]`. This function lets use slightly better typing.
export const above = typedKeys(size).reduce((acc, label: keyof Size) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {} as StyleFnMap)

export const renderList = (list: Link[]) =>
  list.map(({ name, path }) => (
    <motion.li key={path} whileHover={{ scale: [1.04, 0.9, 1.08, 1.1] }}>
      <Link href={path}>
        <a>{name}</a>
      </Link>
    </motion.li>
  ))

export const formatRatingToStars = (rating: Rating | number): string => {
  if (typeof rating === "string") {
    switch (rating) {
      case "one":
        return "⭐️"
      case "two":
        return "⭐️".repeat(2)
      case "three":
        return "⭐️".repeat(3)
      case "four":
        return "⭐️".repeat(4)
      case "five":
        return "⭐️".repeat(5)
      default:
        return ""
    }
  } else {
    switch (rating) {
      case 0:
        return "🌟"
      case 1:
        return "🌟🌟"
      case 2:
        return "🌟".repeat(2)
      case 3:
        return "🌟".repeat(3)
      case 4:
        return "🌟".repeat(5)
      default:
        return "🌟"
    }
  }
}

type FlexDirection = "row" | "column" | "column-reverse" | "row-reverse"
type JustifyContent =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly"

type AlignItems = "flex-start" | "flex-end" | "center" | "baseline" | "stretch"

export const handleFlex = (
  flexDirection: FlexDirection,
  justifyContent: JustifyContent,
  alignItems: AlignItems
) => {
  return css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `
}
