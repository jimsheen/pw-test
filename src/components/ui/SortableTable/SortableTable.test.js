import React from 'react';
import {
  render,
  fireEvent,
  findByText,
} from 'utils/testUtils';

import SortableTable from './SortableTable';

import { items, mappings } from './SortableTable.mock';

const defaultProps = {
    pageItems: items,
    mappings,
};

const onViewDetails = jest.fn();

const setup = (props) => {
    const newProps = {
        ...defaultProps,
        ...props
    };
    return render(<SortableTable { ...newProps } />)
}

describe('SortableTable', () => {
    it('renders a table with rows', async () => {
        const { findAllByText } = setup();
        expect(await findAllByText(/division_1/i)).toHaveLength(14);
    });

    it('fires view details function', async () => {
        const { findAllByText } = setup({ onViewDetails });
        const button = await findAllByText(/View details/i);
        expect(button[0]).toBeTruthy();
        fireEvent.click(button[0]);
        expect(onViewDetails).toHaveBeenCalledWith(0);
    })
})