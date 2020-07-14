import React, { useState, useEffect } from 'react';

import { omit } from 'lodash';

import SortableTable from './SortableTable';
import Pagination from 'components/ui/Pagination';
import TableFilters from 'components/ui/SortableTable/TableFilters';

import { TableMappingTypes } from 'types';

type SortableTableContainerTypes = {
	items: any,
	mappings: TableMappingTypes[],
	primaryKey?: string,
	onViewDetails?: (id: string) => void,
};

const getTotalPages = (totalItems: number, perPage: number) => Math.round(totalItems / perPage);

const SortableTableContainer: React.FC<SortableTableContainerTypes> = ({
	items,
	mappings,
	onViewDetails,
	primaryKey
}) => {

	const [sortedItems, setSortedItems] = useState([]);
	const [pageItems, setPageItems] = useState([]);
	const [filterTerms, setFilterTerms] = useState({});
	
	const perPage = 10;
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPages, setTotalPages] = useState(getTotalPages(items.length, perPage) || 0);

	const onFilterChange = (key: string, value: string | number) => {
		if (key === value) {
			setFilterTerms((prevTerms) => (omit(prevTerms, key)));
		} else {
			setFilterTerms(obj => ({
				...obj,
				[key]: value,
			}));
		}
		setCurrentPage(1);
	};

	const onClearFilters = () => {
		setFilterTerms({});
		setCurrentPage(1);
	}

	const onPageChange = (currentPage: number) => {
		setCurrentPage(currentPage);
	};

	// filter items per page or by search terms
	useEffect(() => {

		setPageItems(() => {
			return items.filter((item: any) =>
				Object.entries(filterTerms).every(([k, v]) =>
					item[k] === v
				)
			).slice((currentPage * perPage) - perPage, perPage * currentPage)
		})
		setSortedItems(() => {
			return items.filter((item: any) =>
				Object.entries(filterTerms).every(([k, v]) =>
					item[k] === v
				)
			)
		})
	}, [items, filterTerms, currentPage]);

	useEffect(() => {
		setTotalPages(getTotalPages(sortedItems.length, perPage));
	}, [sortedItems]);

	const tableProps = {
		items: sortedItems,
		pageItems,
		mappings,
		onViewDetails,
		primaryKey: primaryKey || 'id',
	};

	const paginationProps = {
		totalPages,
		currentPage,
		onPageChange
	};

	const TableFilterProps = {
		mappings,
		onFilterChange,
		items,
		filterTerms,
		onClearFilters
	};

	return (
		<>
  		<TableFilters { ...TableFilterProps } />
			<SortableTable { ...tableProps } />
			<Pagination { ...paginationProps } />
		</>
	)
}


export default SortableTableContainer;
