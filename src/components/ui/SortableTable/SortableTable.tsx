import React from 'react';
import {
	isEmpty
} from 'lodash';
import {
	Button,
} from 'rebass';
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td
} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import { TableMappingTypes } from 'types';

import TableFilters from './TableFilters';

type SortableTableTypes = {
	items: any[],
	pageItems: any[],
	mappings: TableMappingTypes[],
	filterTerms: any,
	primaryKey: any,
	onViewDetails: (id: string) => void,
	onFilterChange: (key: string, value: string) => void;
	onClearFilters: () => void,
};

const SortableTable: React.FC < SortableTableTypes > = ({
	mappings,
	items,
	pageItems,
	onFilterChange,
	onClearFilters,
	filterTerms,
	onViewDetails,
	primaryKey,
}) => {

	if (!mappings && !items) return null;

	return (
		<React.Fragment>
			{!isEmpty(mappings) &&
	  		<TableFilters 
	  			mappings={mappings} 
	  			onFilterChange={onFilterChange} 
	  			items={items}
	  			filterTerms={filterTerms}
	  			onClearFilters={onClearFilters}
	  		/>
  		}
			<Table>
				{!isEmpty(mappings) &&
			  	<Thead>
						<Tr>
							 {mappings.map((label, i) => (
							  <Th key={label.value} style={{ textAlign: 'left' }}>
							  		{label.label}
							  </Th>
							))}
						</Tr>
			  	</Thead>
			  	}
		  		{!isEmpty(pageItems) && !isEmpty(mappings) &&
		  			<Tbody>
			  			{pageItems.map((row, index) => (
			  				<Tr key={index} >
			  					{mappings.map((col, i) => (
			  						<Td key={col.value} >
			  							{row[col.value]}
			  						</Td>
			  					))}
			  					<Td>
			  						<Button 
			  							width="100%"
			  							onClick={() => onViewDetails(row[primaryKey])}
			  						>
			  							View details
			  						</Button>
			  					</Td>
			  				</Tr>
			  			))}
			  		</Tbody>
		  		}
			</Table>
		</React.Fragment>
	)
}
export default SortableTable;
