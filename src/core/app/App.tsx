import React, { useEffect } from 'react';
import { List } from '../components/list/list';
import { useCharacters } from '../hook/GOT.hook';
import './App.css';

export function App() {
    const { characters, handleLoad, handleUpdate } = useCharacters();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return <List characters={characters} handleUpdate={handleUpdate}></List>;
}
