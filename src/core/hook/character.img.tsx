import { CharacterType } from '../type/GOT.type';

import imgJaime from '../../assets/characters/Jaime_luchador.webp';
import imgSquire from '../../assets/characters/Bronn_escudero_Jai.webp';
import imgKing from '../../assets/characters/Joffrey_rey.webp';
import imgDaenerys from '../../assets/characters/Daenerys_luchadora.webp';
import imgAdviser from '../../assets/characters/Tyrion_asesor_Dae.webp';

export function characterImage(item: CharacterType) {
    switch (item.type) {
        case 'fighter':
            return `../../assets/${imgJaime}`;
            break;

        case 'adviser':
            return '../../assets/' + { imgAdviser };
            break;
        case 'king':
            return '../../assets/' + { imgKing };
            break;
        case 'squire':
            return '../../assets/' + { imgSquire };
            break;
        default:
            return '../../assets/' + { imgDaenerys };
            break;
    }
}
