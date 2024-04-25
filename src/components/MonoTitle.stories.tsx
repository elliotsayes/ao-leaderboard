import type { Meta, StoryObj } from "@storybook/react"

import { MonoTitle } from "./MonoTitle"

/**
 * Displays a MonoTitle or a component that looks like a MonoTitle.
 */
const meta = {
  title: "ui/MonoTitle",
  component: MonoTitle,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
  },
  parameters: {
    layout: "centered",
  },
  args: {
    children: "MonoTitle",
  },
} satisfies Meta<typeof MonoTitle>

export default meta

type Story = StoryObj<typeof meta>

/**
 * The default form of the MonoTitle, used for primary actions and commands.
 */
export const Default: Story = {
  args: {
    href: "https://example.com",
  },
}
