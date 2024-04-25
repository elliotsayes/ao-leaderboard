import type { Meta, StoryObj } from "@storybook/react"

import { MonoLink } from "./MonoLink"

/**
 * Header links
 */
const meta = {
  title: "_Lucas/text/MonoLink",
  component: MonoLink,
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
    href: "https://example.com",
  }
} satisfies Meta<typeof MonoLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Points: Story = {
  args: {
    children: "Points",
  },
}

export const Quests: Story = {
  args: {
    children: "Quests",
  },
}

export const QuestsAlt: Story = {
  args: {
    children: "Quests",
    className: "underline font-[400]",
  },
}
