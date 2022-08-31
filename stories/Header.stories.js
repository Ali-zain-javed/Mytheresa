import React from "react";
import { Nav } from "../components";
import AppProvider from '../store/AppContext'
export default {
  title: "Components/Nav",
  component: Nav,
  argTypes: {},
};

const Template = (args) => <AppProvider> <Nav {...args} /></AppProvider>;

  export const primary = Template.bind({

  });

