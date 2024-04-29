import type { Meta, StoryObj } from "@storybook/react"

import { MonoTableBody } from "./MonoTableBody"

/**
 * Title text
 */
const meta = {
  title: "_Lucas/text/MonoTableBody",
  component: MonoTableBody,
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
} satisfies Meta<typeof MonoTableBody>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Rank: Story = {
  args: {
    children: "1",
    highlight: false,
  },
}

export const Address: Story = {
  args: {
    children: "G61rjPlxMfzquFQ-gfd1cZX7sdNrN27plK0c8XaZxGQ",
    highlight: false,
  },
}

export const Score: Story = {
  args: {
    children: "123400 EXP",
    highlight: true,
  },
}
