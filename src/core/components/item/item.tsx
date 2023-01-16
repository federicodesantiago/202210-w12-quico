import { CharacterType } from '../../type/GOT.type';

export function Item({
    item,
    handleUpdate,
}: {
    item: CharacterType;
    handleUpdate: (robot: Partial<Array<CharacterType>>) => void;
}) {
    return (
        <>
            <div className="card character__card">
                <img
                    src={item.image}
                    alt="Nombre y familia del personaje"
                    className="character__picture card-img-top"
                />
                <div className="card-body">
                    <h2 className="character__name card-title h4">
                        {item.name}
                    </h2>
                    <div className="character__info">
                        <ul className="list-unstyled">
                            <li id="edad">Edad: {item.age} años</li>
                            <li>
                                Estado:
                                {item.status ? (
                                    <i className="fas fa-thumbs-up"></i>
                                ) : (
                                    <i className="fas fa-thumbs-down"></i>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="character__overlay">
                        <ul className="list-unstyled">
                            <li>Años de reinado: X</li>
                            <li>Arma: XXX</li>
                            <li>Destreza: X</li>
                            <li>Peloteo: X</li>
                            <li>Asesora a: X</li>
                            <li>Sirve a: X</li>
                        </ul>
                        <div className="character__actions">
                            <button className="character__action btn">
                                habla
                            </button>
                            <button className="character__action btn">
                                muere
                            </button>
                        </div>
                    </div>
                </div>
                <i className="emoji"></i>
            </div>
        </>
    );
}
