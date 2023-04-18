import { Meta, StoryObj } from "@storybook/react";

import Avatar from "../components/Avatar";

const meta = {
  title: "Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default ={
    args: {
        src: "https://via.placeholder.com/150",
        alt: "Avatar"
    },
}
