import React from 'react';
import {
	isEmpty,
	uniqBy
} from 'lodash';
import {
	Select
} from '@rebass/forms';
import {
	Button
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


// const TableFilters = ({ mappings, onFilterChange }) => {}

type MyGroupType = {
    [key:string]: any;
}

type SortableTableTypes = {
	items: any[],
	mappings: MyGroupType[],
	onFilterChange: (key: string, value: string) => void;
};

const SortableTable: React.FC<SortableTableTypes> = ({
	mappings,
	items,
	onFilterChange,
}) => {

	if (!mappings && !items) return null;

	return (
		<React.Fragment>
			{!isEmpty(mappings) && 
		  		<Table>
			  		<Tbody>
						<Tr>
							{mappings.map((label) => (
                <Th key={label.value} >
                	{label.filterable &&
	                  <Select onChange={(e) => onFilterChange(label.value, e.target.value)} >
	                  	<option value=''>Select an option...</option>
	                    {uniqBy(items, label.value).map((item, index) => (
	                        <option value={item[label.value]} key={item[label.value]}>
	                        	{item[label.value]}
	                        </option>
	                    ))}
	                  </Select>
                	}
                	{label.filterable && (<span>&nbsp;</span>)}
                 </Th>
              ))}
              <Th>&nbsp;</Th>
						</Tr>
			  		</Tbody>
		  		</Table>
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
		  		{!isEmpty(items) && !isEmpty(mappings) &&
		  			<Tbody>
			  			{items.map((row, index) => (
			  				<Tr key={index} >
			  					{mappings.map((col, i) => (
			  						<Td key={col.value} >
			  							{row[col.value]}
			  						</Td>
			  					))}
			  					<Td>
			  						<Button>View details</Button>
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
