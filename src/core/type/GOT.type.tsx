export type AdviserType = {
    image: string;
    name: string;
    family: string;
    age: number;
    sentence: string;
    emoji: string;
    advised: string;
    status: boolean;
};

export class Adviser implements AdviserType {
    status: boolean;
    constructor(
        public image: string,
        public name: string,
        public family: string,
        public age: number,
        public sentence: string,
        public emoji: string,
        public advised: string
    ) {
        this.status = false;
    }
}

export type FighterType = {
    image: string;
    name: string;
    family: string;
    age: number;
    sentence: string;
    emoji: string;
    weapon: string;
    skills: number;
    status: boolean;
};

export class Fighter implements FighterType {
    status: boolean;
    constructor(
        public image: string,
        public name: string,
        public family: string,
        public age: number,
        public sentence: string,
        public emoji: string,
        public weapon: string,
        public skills: number
    ) {
        this.status = false;
    }
}

export type KingType = {
    image: string;
    name: string;
    family: string;
    age: number;
    sentence: string;
    emoji: string;
    yearsService: number;
    status: boolean;
};

export class King implements KingType {
    status: boolean;
    constructor(
        public image: string,
        public name: string,
        public family: string,
        public age: number,
        public sentence: string,
        public emoji: string,
        public yearsService: number
    ) {
        this.status = false;
    }
}

export type SquireType = {
    image: string;
    name: string;
    family: string;
    age: number;
    sentence: string;
    emoji: string;
    master: string;
    ballLevel: number;
    status: boolean;
};

export class Squire implements SquireType {
    status: boolean;
    constructor(
        public image: string,
        public name: string,
        public family: string,
        public age: number,
        public sentence: string,
        public emoji: string,
        public master: string,
        public ballLevel: number
    ) {
        this.status = false;
    }
}
