import React from 'react';

import useClient from 'hooks/useClient'

import SortableTable from 'components/ui/SortableTable/';


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

    const { isLoading, response } = useClient({
        uri: '/inspections'
    });

    console.log(response);

    return (
        <div>
            <h1>Dashboard</h1>
            {!isLoading &&
                <SortableTable mappings={mappings} items={response}/>
            }
        </div>
    )
};


export default DashboardPage;
