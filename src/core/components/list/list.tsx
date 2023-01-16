import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/GOT.context';
import { Item } from '../item/item';

export function List() {
    const { characters, handleLoad } = useContext(AppContext);

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <>
            <div className="app container">
                <ul className="characters-list row list-unstyled">
                    {characters.map((item) => {
                        return <Item item={item}></Item>;
                    })}
                </ul>
            </div>
            {/* <div className="comunications">
                <p className="comunications__text display-1">
                    Una frase que dice alguien
                </p>
                <img
                    id="personaje"
                    className="comunications__picture"
                    src="../assets/characters/No-one.webp"
                    alt="Nombre y familia del que habla"
                />
            </div> */}
        </>
    );
}
