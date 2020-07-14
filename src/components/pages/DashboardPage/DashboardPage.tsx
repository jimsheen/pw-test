import React, { useState } from 'react';
import {
	Box,
} from 'rebass';

import { find } from 'lodash';

import useClient from 'hooks/useClient';
import SortableTable from 'components/ui/SortableTable/';
import Modal from 'components/ui/Modal';
import InspectorDetail from './InspectorDetail';
import LoadingSpinner from 'components/ui/LoadingSpinner';
import LayoutContainer from 'components/layout/LayoutContainer';

const mappings = [{
	label: 'Division name',
	value: 'division_name',
	filterable: true,
}, {
	label: 'Area type',
	value: 'area_type_name',
	filterable: true,
}, {
	label: 'Inspection type',
	value: 'inspection_type_name',
	filterable: true,
}, {
	label: 'User',
	value: 'username',
	filterable: true,
}, {
	label: 'score',
	value: 'score',
}];

const DashboardPage: React.FC = () => {

	const defaultModalState = {
		isVisible: false,
		id: null,
		item: null,
	};
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [detailItem, setDetailItem] = useState < any > (null);

	const { isLoading, response } = useClient({
		uri: '/inspections'
	});

	const onViewDetails = (id: string) => {
		const item = find(response, { id });
		setDetailItem(item);
		setIsModalVisible(true);
	};

	const SortableTableProps = {
		mappings,
		items: response,
		onViewDetails,
	};

	return (
		<LayoutContainer>
			<h1>Dashboard</h1>
				<Box>
					{!isLoading &&
						<SortableTable { ...SortableTableProps } />
					}
					{isLoading &&
						<LoadingSpinner />
					}
				</Box>
				<Modal 
					isVisible={detailItem}
					closeModal={() => setDetailItem(null) }
				>
					<InspectorDetail item={detailItem} />
				</Modal>
		</LayoutContainer>
	)
};


export default DashboardPage;
