import { CharacterType } from '../type/GOT.type';
import { charAction } from './action.creators';
import { actionType } from './action.type';

const initialState: Array<CharacterType> = [];

export function charactersReducer(
    state = initialState,
    action: charAction
): Array<CharacterType> {
    switch (action.type) {
        case actionType.load:
            return action.payload as Array<CharacterType>;
            break;

        // case actionType.update:
        //     const updateCharacter: CharacterType = action.payload;
        //     return (state as Array<CharacterType>).map((item) =>
        //         item.name === updateCharacter.name
        //             ? { ...item, ...updateCharacter }
        //             : item
        //     );
        //     break;

        default:
            return { ...state };
            break;
    }
}
