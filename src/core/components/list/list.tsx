import { Item } from '../item/item';

export function List() {
    return (
        <>
            <div className="app container">
                <ul className="characters-list row list-unstyled">
                    <Item item={model}></Item>
                </ul>
            </div>
            <div className="comunications">
                <p className="comunications__text display-1">
                    Una frase que dice alguien
                </p>
                <img
                    id="personaje"
                    className="comunications__picture"
                    src="../assets/characters/No-one.webp"
                    alt="Nombre y familia del que habla"
                />
            </div>
        </>
    );
}
