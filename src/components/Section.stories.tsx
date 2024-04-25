import type { Meta, StoryObj } from "@storybook/react"

import { Section } from "./Section"

/**
 * Section container
 */
const meta = {
  title: "_Lucas/layout/Section",
  component: Section,
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
} satisfies Meta<typeof Section>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
