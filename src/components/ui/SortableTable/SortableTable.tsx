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
import './SortableTable.css';

import { TableMappingTypes } from 'types';

type SortableTableTypes = {
	pageItems: any[],
	mappings: TableMappingTypes[],
	primaryKey?: any,
	onViewDetails?: (id: string) => void,
};

const SortableTable: React.FC < SortableTableTypes > = ({
	mappings,
	pageItems,
	onViewDetails,
	primaryKey = 'id',
}) => {

	if (!mappings && !pageItems) return null;

	return (
		<React.Fragment>
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
			  					{onViewDetails &&
				  					<Td>
				  						<Button 
				  							width="100%"
				  							onClick={() => onViewDetails(row[primaryKey])}
				  						>
				  							View details
				  						</Button>
				  					</Td>
			  					}
			  				</Tr>
			  			))}
			  		</Tbody>
		  		}
			</Table>
		</React.Fragment>
	)
}
export default SortableTable;
