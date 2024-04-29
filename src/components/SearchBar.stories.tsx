import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import { SearchBar } from "./SearchBar"
import { useState } from "react"

/**
 * Contents of the Search Bar
 */
const meta = {
  title: "_Lucas/inputs/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  args: {
    value: "Text",
    onChange: fn
  }
} satisfies Meta<typeof SearchBar>

export default meta

type Story = StoryObj<typeof meta>

export const Interactive: Story = {
  decorators: [
    () => {
      const [filterValue, setFilterValue] = useState("")
      return (
        <SearchBar
          value={filterValue}
          onChange={(e) => setFilterValue(e)}
        />
      )
    }
  ]
}

export const Text: Story = {}

export const NoText: Story = {
  args: {
    value: ""
  }
}
