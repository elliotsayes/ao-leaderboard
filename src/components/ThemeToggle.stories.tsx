import type { Meta, StoryObj } from "@storybook/react"

import { ThemeToggle } from "./ThemeToggle"
import { BackgroundToggleProvider } from "@/hooks/useBackgroundToggle";

/**
 * ThemeToggle container
 */
const meta = {
  title: "_Lucas/buttons/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    scale: {
      control: "number",
    },
  },
  args: {
    scale: 2,
  },
  decorators: [
    (Story) => (
      <BackgroundToggleProvider>
        <Story />
      </BackgroundToggleProvider>
    ),
  ]
} satisfies Meta<typeof ThemeToggle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
