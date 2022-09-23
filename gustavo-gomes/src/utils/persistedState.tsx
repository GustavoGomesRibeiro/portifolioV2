import { useState, useEffect } from 'react';


export default function persistedState(key: string, initialState: any) {
    const [ state, setState] = useState(() => {
        const getValueKey = localStorage.getItem(key);

        if(getValueKey){
            return JSON.parse(getValueKey);
        } else {
            return initialState;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state])


    return [state, setState];
}