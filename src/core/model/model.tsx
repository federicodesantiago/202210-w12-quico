import { CharacterType } from '../type/GOT.type';

export const charactersDetails: Array<CharacterType> = [
    {
        image: '../src/assets/characters/Jaime_luchador.webp',
        name: 'Jaime Lannister',
        family: 'Lannister',
        age: 34,
        sentence: 'Primero pego y luego pregunto',
        emoji: '&#9876',
        weapon: 'espadaca',
        skills: 27,
        status: false,
    },
    {
        image: '../assets/characters/Tyrion_asesor_Dae.webp',
        name: 'Tyrion Lannister',
        family: 'Targaryen',
        age: 27,
        sentence: 'No sé por qué, pero creo que voy a morir pronto',
        emoji: '&#127891',
        advised: 'Daenerys Targaryen',
        status: false,
    },

    {
        image: '../assets/characters/Joffrey_rey.webp',
        name: 'Joffrey Baratheon',
        family: 'Lannister',
        age: 14,
        sentence: 'Vais a morir todos',
        emoji: '&#128081',
        yearsService: 2,
        status: false,
    },

    {
        image: '../assets/characters/Daenerys_luchadora.webp',
        name: 'Daenerys Targaryen',
        family: 'Targaryen',
        age: 16,
        sentence: 'Primero pego y luego pregunto',
        emoji: '&#9876',
        weapon: 'dragons',
        skills: 55,
        status: false,
    },

    {
        image: '../assets/characters/Bronn_escudero_Jai.webp',
        name: 'Bronn',
        family: 'Lannister',
        age: 32,
        sentence: 'Soy un loser',
        emoji: '&#128737',
        master: 'Jaime Lannister',
        ballLevel: 7,
        status: false,
    },
];
