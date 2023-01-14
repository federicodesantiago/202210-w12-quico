export type CharacterType = {
    image: string;
    name: string;
    family: string;
    age: number;
    sentence: string;
    emoji: string;
    advised?: string;
    weapon?: string;
    skills?: number;
    yearsService?: number;
    master?: string;
    ballLevel?: number;
    status: boolean;
};

export class Character implements CharacterType {
    status: boolean;
    constructor(
        public image: string,
        public name: string,
        public family: string,
        public age: number,
        public sentence: string,
        public emoji: string,
        public advised: string,
        public weapon?: string,
        public skills?: number,
        public yearsService?: number,
        public master?: string,
        public ballLevel?: number
    ) {
        this.status = false;
    }
}
