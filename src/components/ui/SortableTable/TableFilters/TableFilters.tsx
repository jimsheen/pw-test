import React, { useState } from 'react';
import { 
	uniqBy, 
	isEmpty
} from 'lodash';
import {
	Flex,
	Box,
	Button,
} from 'rebass';
import {
	Select,
} from '@rebass/forms';

import { TableMappingTypes } from 'types';

type TableFilterTypes = {
	mappings: TableMappingTypes[],
	items: any[],
	filterTerms: any,
	onFilterChange: (key: string, value: string) => void,
	onClearFilters: () => void,
};

const TableFilters: React.FC < TableFilterTypes > = ({
	mappings,
	onFilterChange,
	items,
	filterTerms,
	onClearFilters,
}) => {
	const [isFiltersOpen, setFiltersOpen] = useState(false);
	return (
		<Box mb={3}>
			<Box mb={2}>
				<Flex alignItems="center">
					<Button 
						onClick={() => setFiltersOpen((s) => !s )}
					>
						Filters
					</Button>
					{!isEmpty(filterTerms) &&
						<Button 
							onClick={onClearFilters}
							variant="secondary" 
							ml={2}
						>
							Clear all
						</Button>
					}
				</Flex>
			</Box>

			{isFiltersOpen &&
				<Flex
					mx={-2}
					mb={2}
					flexWrap="wrap"
				>
					{mappings.map((label) => (
						<React.Fragment key={label.value}>
							{label.filterable &&
								<Box 
									key={label.value}
									px={2}
									width={[1/2, 1/4]}
									mb={[2, 0]}
								>
										<Select 
											onChange={(e) => onFilterChange(label.value, e.target.value)}
											name={label.value}
											id={label.value}
											value={filterTerms[label.value] || label.value}
										>
											<option value={label.value}>{label.label}</option>
											{uniqBy(items, label.value).map((item, index) => (
													<option value={item[label.value]} key={item[label.value]}>
														{item[label.value]}
													</option>
											))}
										</Select>
								</Box>
							}
						</React.Fragment>
					))}
				</Flex>
			}
		</Box>
	);
}

export default TableFilters;
