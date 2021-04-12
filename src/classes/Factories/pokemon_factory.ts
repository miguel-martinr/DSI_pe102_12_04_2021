import { Pokemon } from "../Pokemon";


export abstract class PokemonFactory {
  public abstract factoryMethod(): Pokemon;

  logic() {
    console.log(this.greetings());
  }

  greetings(): string {
    const pokemon = this.factoryMethod();
    return pokemon.talk();
  }
}
