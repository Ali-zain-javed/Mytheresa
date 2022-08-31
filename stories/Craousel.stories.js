import React from "react";
import { Carousel } from "../components";

export default {
  title: "Components/Carousel",
  component: Carousel,
  argTypes: {},
};

const Template = (args) => <Carousel {...args} carousel={[{ backdrop_path: "/5hNcsnMkwU2LknLoru73c76el3z.jpg", path: '', id: '123', title: 'Dilwaly2' }, { backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg", path: '', id: '123', title: 'Dilwaly3' }]} />;

export const Primary = Template.bind({
  carousel: [{ backdrop_path: "/5hNcsnMkwU2LknLoru73c76el3z.jpg", title: 'Dilwaly' }]
});

