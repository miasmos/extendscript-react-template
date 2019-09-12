import { useState, useEffect } from 'react';

export const usePromise = promise => {
    const [result, setResult] = useState([]);
    useEffect(() => {
        const invoke = async () => {
            const response = await promise();
            setResult(response);
        };
        invoke();
    }, []);

    return result;
};
