import type { Meta, StoryObj } from "@storybook/react"

import { HeaderItems } from "./HeaderItems"

/**
 * Contents of the page header
 */
const meta = {
  title: "_Lucas/layout/HeaderItems",
  component: HeaderItems,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
} satisfies Meta<typeof HeaderItems>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
