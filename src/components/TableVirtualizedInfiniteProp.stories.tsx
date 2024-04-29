import type { Meta, StoryObj } from "@storybook/react"

import { TableVirtualizedInfiniteProp } from "./TableVirtualizedInfiniteProp"

import ContractData from "../../fixtures/leaderboards/contract_gAC5hpUPh1v-oPJLnK3Km6-atrYlvI271bI-q0yZOnw.json"
import Gen100Data from "../../fixtures/leaderboards/gen_100.json"
// import Gen100KData from "../../fixtures/leaderboards/gen_100K.json"
// import Gen1MData from "../../fixtures/leaderboards/gen_1M.json"

const storyData = {
  "default": ContractData,
  "100": Gen100Data,
  // "100K": Gen100KData,
  // "1M": Gen1MData,
};

/**
 * TableVirtualizedInfiniteProp
 */
const meta = {
  title: "_Experiment/table/TableVirtualizedInfiniteProp",
  component: TableVirtualizedInfiniteProp,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TableVirtualizedInfiniteProp>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    flatData: storyData["default"],
  }
}

export const Gen100: Story = {
  args: {
    flatData: storyData["100"],
  }
}

// export const Gen100K: Story = {
//   args: {
//     flatData: storyData["100K"],
//   }
// }

// export const Gen1M: Story = {
//   args: {
//     flatData: storyData["1M"],
//   }
// }
