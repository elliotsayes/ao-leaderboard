import type { Meta, StoryObj } from "@storybook/react"

import { PageLayout } from "./PageLayout"
import { HeaderItems } from "./HeaderItems"
import { PageContent } from "./PageContent"

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
  argTypes: {
    altWallpaper: {
      control: "boolean",
    },
  },
  args: {
    header: "Header",
    children: "Content",
    altWallpaper: false,
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

export const WithHeaderItemsAndContent: Story = {
  args: {
    header: <HeaderItems />,
    children: (
      <PageContent>
        {() => <p>Content</p>}
      </PageContent>
    )
  },
}
