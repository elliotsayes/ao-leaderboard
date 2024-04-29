import type { Meta, StoryObj } from "@storybook/react"

import { PageContent } from "./PageContent"

/**
 * Layout of the leaderboard page
 */
const meta = {
  title: "_Lucas/layout/PageContent",
  component: PageContent,
  tags: ["autodocs"],
  parameters: {
    // layout: "centered"
  },
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof PageContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Content",
  },
}

