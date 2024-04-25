import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test";

import { ThemeToggle } from "./ThemeToggle"
import React from "react";

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
    value: {
      control: "boolean",
    },
    scale: {
      control: "number",
    },
  },
  args: {
    value: false,
    onValueChange: fn(),
    scale: 2,
  }
} satisfies Meta<typeof ThemeToggle>

export default meta

type Story = StoryObj<typeof meta>

const TestBed = ({scale}: {scale: number}) => {
  const [value, setValue] = React.useState(false);
  return (
    <ThemeToggle
      value={value}
      onValueChange={setValue}
      scale={scale}
    />
  );
} 

export const Interactive: Story = {
  render: (args) => <TestBed scale={args.scale} />,
}

export const Inactive: Story = {}

export const Active: Story = {
  args: {
    value: true,
  },
}
