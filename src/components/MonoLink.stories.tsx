import type { Meta, StoryObj } from "@storybook/react"

import { MonoLink } from "./MonoLink"

/**
 * Displays a MonoLink or a component that looks like a MonoLink.
 */
const meta = {
  title: "ui/MonoLink",
  component: MonoLink,
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
    children: "MonoLink",
  },
} satisfies Meta<typeof MonoLink>

export default meta

type Story = StoryObj<typeof meta>

/**
 * The default form of the MonoLink, used for primary actions and commands.
 */
export const Default: Story = {
  args: {
    href: "https://example.com",
  },
}
