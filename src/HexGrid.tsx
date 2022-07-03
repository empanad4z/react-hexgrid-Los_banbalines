import React, { Component } from "react"

export type HexGridProps = {
  width?: string | number
  height?: string | number
  viewBox?: string
  children: React.ReactElement | React.ReactElement[]
}
export function HexGrid({
  width = 800,
  height = 600,
  viewBox = "-50 -50 100 100",
  children,
}: HexGridProps) {
  return (
    <svg
      className="grid"
      width={width}
      height={height}
      viewBox={viewBox}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}
export default HexGrid
