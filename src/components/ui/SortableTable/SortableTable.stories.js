import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SortableTable from './SortableTable';
import SortableTableContainer from './SortableTable.container';

import { mappings, items } from './SortableTable.mock';

const props = {
  mappings,
  pageItems: items,
};

const onViewDetails = action('onViewDetails');

const withDetailsProps = {
  ...props,
  onViewDetails,
};

storiesOf('UI.SortableTable', module)
  .add('without props', () => <SortableTable />)
  .add('with props', () => <SortableTable { ...props } />)
  .add('with view details button', () => <SortableTable { ...withDetailsProps } />)

const containerProps = {
  items,
  mappings,
};

const containerWithDetails = {
  ...containerProps,
  onViewDetails
};

storiesOf('UI.SortableTableContainer', module)
  .add('default', () => <SortableTableContainer { ...containerProps } />)
  .add('with view details', () => <SortableTableContainer { ...containerWithDetails } />)
