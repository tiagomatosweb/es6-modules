

export default class SuperHero {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
}

export function printHeroName(hero) {
    console.log(`Superhero name is: ${hero.name}`);
}

export function printHeroPower(hero) {
    console.log(`Superhero power is: ${hero.power}`);
}
