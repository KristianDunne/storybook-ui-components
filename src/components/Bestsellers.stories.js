import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Bestsellers } from './Bestsellers';
import design from './bestsellers-design.png';

export default {
  title: 'Component/Bestsellers',
  component: Bestsellers,
  decorators: [withDesign],
  argTypes: {},

  parameters: {
    design: {
      type: 'image',
      url: design,
    },
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'default',
          value: '#FAEFE3',
        },
        {
          name: 'black',
          value: '#000000',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'grey',
          value: '#999999',
        },
      ],
    },
  },
};

const Story = (args) => <Bestsellers {...args} />;

const products = [
  {
    image: '/product1.svg',
    name: 'Nike Air Max 270',
    brand: 'Nike',
    price: '$195.80',
  },
  { image: '/product2.svg', name: 'Nike Air Max 90', brand: 'Nike', price: '$195.80' },
  { image: '/product3.svg', name: 'Nike Air Max Plus', brand: 'Nike', price: '$195.80' },
];

export const Basic = Story.bind({});
Basic.args = {
  products: products,
  containerBackgroundColor: '',
  titleColor: '',
  productNameColor: '',
  productBrandColor: '',
  productPriceColor: '',
  productHoverBackground: '',
  onProductClick: (product) => {},
};
