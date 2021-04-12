import { FighterInterface, PokemonType } from "../../interfaces/fighter";

export abstract class Pokemon implements FighterInterface {
  constructor(protected name: string, protected weight: number, protected height: number,
    protected type: PokemonType, protected attack: number, protected defense: number,
    protected hp: number = 100) {

  }

  abstract talk(): string;
  
  getName(): string {
    return this.name;
  }
  getWeight(): number {
    return this.weight;
  }

  getHeight(): number {
    return this.height;
  }

  getType(): PokemonType {
    return this.type;
  }

  getAttack(): number {
    return this.attack;
  }

  getDefense(): number {
    return this.defense;
  }

  getHp(): number {
    return this.hp;
  }
}
