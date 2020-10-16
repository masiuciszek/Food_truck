import React, { useState } from "react"
import textKeys from "../lib/textKeys"

export const useTextKey = () => {
  const t = (key: string): string => textKeys[key]

  return { t }
}
