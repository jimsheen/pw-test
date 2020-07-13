import React from 'react';

import useClient from 'hooks/useClient';

import InspectorDetail from './InspectorDetail';

type InspectorDetailTypes = {
	item: any,
};

const InspectorDetailContainer: React.FC <InspectorDetailTypes> = ({ item }) => {

	console.log(item);

	const { isLoading, response } = useClient({
		uri: '/questions',
	});

	console.log(response);

	return <InspectorDetail item={item} isLoading={isLoading} questions={response} />
}

export default InspectorDetailContainer;
