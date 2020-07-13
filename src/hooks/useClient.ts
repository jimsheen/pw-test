import { useState, useEffect } from 'react';

import callApi from 'utils/callApi';

const useClient = ({
    params,
    uri,
}: {
    params ? : any,
    uri ? : string,
}) => {

    const [response, setResponse] = useState({} as any);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        setLoading(true);
        try {
            const {
                data,
                status
            } = await callApi({
                params,
                uri,
            });
            if (status === 200) {
                setResponse(data);
            } else {
                console.log('status error!');
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
        fetchData();
    }, [params, uri])
    return { response, isLoading };
}

export default useClient