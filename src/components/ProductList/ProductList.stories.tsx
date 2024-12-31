import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {ProductList} from './ProductList';

const meta: Meta<typeof ProductList> = {
  component: ProductList,
};

export default meta;

type Story = StoryObj<typeof ProductList>;

export const Basic: Story = {args: {}};
