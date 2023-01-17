import React, { useEffect } from 'react';
import { List } from '../components/list/list';
import { useCharacters } from '../hook/GOT.hook';
import './App.css';

export function App() {
    const { handleLoad } = useCharacters();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return <List></List>;
}
