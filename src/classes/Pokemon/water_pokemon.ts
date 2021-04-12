import { Pokemon } from "./pokemon";

export class WaterPokemon extends Pokemon {
  constructor(name: string, weight: number, height: number,
      attack: number, defense: number,
      hp: number = 100) {
    
    super(name, weight, height, 'WATER', attack, defense, hp);
  }

  talk(): string {
    return `My name is ${this.name}, and I'm a Water Pokemon (${this.getHp()} HP)`;
  }
}
