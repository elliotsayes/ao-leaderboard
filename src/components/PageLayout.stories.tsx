import type { Meta, StoryObj } from "@storybook/react"

import { PageLayout } from "./PageLayout"
import { HeaderItems } from "./HeaderItems"

/**
 * Layout of the leaderboard page
 */
const meta = {
  title: "_Lucas/layout/PageLayout",
  component: PageLayout,
  tags: ["autodocs"],
  parameters: {
    // layout: "centered"
  },
  args: {
    header: "Header",
    children: "Content",
  },
} satisfies Meta<typeof PageLayout>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithHeaderItems: Story = {
  args: {
    header: <HeaderItems />,
  },
}
