import React, { useState } from 'react';
import {
	Box,
} from 'rebass';

import { find } from 'lodash';

import useClient from 'hooks/useClient';
import SortableTable from 'components/ui/SortableTable/';
import Modal from 'components/ui/Modal';
import InspectorDetail from './InspectorDetail';

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
	type modalStateType = {
		isVisible: boolean,
		id: string | null,
	}
	const [viewDetailsModal, setViewDetailsModal] = useState(defaultModalState as modalStateType);
	const [detailItem, setDetailItem] = useState<any>(null);

	const { isLoading, response } = useClient({
		uri: '/inspections'
	});

	const onViewDetails = (id: string) => {
		const item = find(response, { id });
			setDetailItem(item);
			setViewDetailsModal((s) => ({
				isVisible: !s.isVisible,
				id,
			}));
	};

	const SortableTableProps = {
		mappings,
		items: response,
		onViewDetails,
	};

	return (
		<>
			<h1>Dashboard</h1>
				{!isLoading &&
					<Box>
						<Box>
							<SortableTable { ...SortableTableProps } />
						</Box>
					</Box>
				}
				<Modal 
					isVisible={viewDetailsModal.isVisible}
					closeModal={() => setViewDetailsModal((s) => ({ ...s, isVisible: false })) }
				>
					<InspectorDetail item={detailItem} />
				</Modal>
		</>
	)
};


export default DashboardPage;
