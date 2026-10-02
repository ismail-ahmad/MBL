'use client';
import {useState, useEffect} from 'react';
export default function CurrentYear():React.JSX.Element {
    const [year, setYear] = useState<string>('');
    useEffect(() => {
        setYear(new Date().getFullYear().toString())
    },[]);
    return(
        <>{year}</>
    );
}