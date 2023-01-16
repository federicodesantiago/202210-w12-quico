import { CharacterType } from '../type/GOT.type';

export function specialProperties(item: CharacterType) {
    switch (item.type) {
        case 'fighter':
            return (
                <>
                    <li>Arma: {item.weapon}</li>
                    <li>Destreza: {item.skills} puntos</li>
                </>
            );
            break;

        case 'adviser':
            return (
                <>
                    <li>Aconseja a: {item.advised}</li>
                </>
            );
            break;
        case 'king':
            return (
                <>
                    <li>Años de servicio: {item.yearsService} años</li>
                </>
            );
            break;
        case 'squire':
            return (
                <>
                    <li>Sirve a: {item.master}</li>
                    <li>Nivel de pelotismo: {item.ballLevel} puntos</li>
                </>
            );
            break;
        default:
            return (
                <>
                    <li></li>
                </>
            );
            break;
    }
}
