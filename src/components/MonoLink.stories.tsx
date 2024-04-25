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
    href: "https://ar.io/points",
  },
}

export const Quests: Story = {
  args: {
    children: "Quests",
    href: "https://zealy.io/c/ar-io",
  },
}

export const QuestsAlt: Story = {
  args: {
    children: "Quests",
    href: "https://zealy.io/c/ar-io",
    className: "underline font-[400]",
  },
}
