import { CharacterType } from '../type/GOT.type';
import { actionType } from './action.type';

export type charAction = {
    type: string;
    payload: Array<CharacterType> | CharacterType;
};

export const charactersLoadCreator = (
    payload: Array<CharacterType>
): charAction => ({
    type: actionType.load,
    payload,
});

export const charactersUpdateCreator = (
    payload: Array<CharacterType>
): charAction => ({
    type: actionType.update,
    payload,
});
