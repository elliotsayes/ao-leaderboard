import type { Meta, StoryObj } from "@storybook/react"

import { MonoTitle } from "./MonoTitle"

/**
 * Title text
 */
const meta = {
  title: "_Lucas/text/MonoTitle",
  component: MonoTitle,
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
} satisfies Meta<typeof MonoTitle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ExpLeaderboard: Story = {
  args: {
    children: "EXP Leaderboard",
  },
}
