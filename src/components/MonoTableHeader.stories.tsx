import type { Meta, StoryObj } from "@storybook/react"

import { MonoTableHeader } from "./MonoTableHeader"

/**
 * Title text
 */
const meta = {
  title: "_Lucas/text/MonoTableHeader",
  component: MonoTableHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: "text",
    },
  },
  args: {
    children: "Text",
  },
} satisfies Meta<typeof MonoTableHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Rank: Story = {
  args: {
    children: "Rank",
  },
}

export const Wallet: Story = {
  args: {
    children: "Wallet",
  },
}
