import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

import SortableTable from './SortableTable';

type MyGroupType = {
    [key:string]: any
}

type SortableTableContainerTypes = {
	items: any,
	mappings: MyGroupType[],
};

const SortableTableContainer: React.FC<SortableTableContainerTypes> = ({
	items,
	mappings
}) => {

	console.log(items);

	const [sortedItems, setSortedItems] = useState(items);
	const [filterTerms, setFilterTerms] = useState({});

	const onFilterChange = (key: string, value: string | number) => {
		setFilterTerms(obj => ({
			...obj,
			[key]: value,
		}));
	};

	useEffect(() => {

		if (!isEmpty(filterTerms)) {
			setSortedItems(() =>
				items.filter((item: any) =>
					Object.entries(filterTerms).every(([k, v]) =>
						item[k] === v)
					)
				)
		}

	}, [items, filterTerms])

	const tableProps = {
		items: sortedItems,
		mappings,
		onFilterChange,
	};

	return <SortableTable { ...tableProps } />
}


export default SortableTableContainer;
