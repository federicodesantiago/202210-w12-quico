import { CharacterType } from '../../type/GOT.type';
import { Item } from '../item/item';

export function List({
    characters,
    handleUpdate,
}: {
    characters: Array<CharacterType>;
    handleUpdate: (characters: Partial<Array<CharacterType>>) => void;
}) {
    return (
        <>
            <div className="app container">
                <ul className="characters-list row list-unstyled">
                    {characters.map((item) => {
                        return (
                            <li key={item.name} className="character col">
                                <Item
                                    item={item}
                                    handleUpdate={handleUpdate}
                                ></Item>
                            </li>
                        );
                    })}
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
