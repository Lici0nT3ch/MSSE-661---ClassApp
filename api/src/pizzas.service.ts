import { Pizzas } from "../lib/pizza";
import { PizzaEntity } from "../lib/api-interfaces";

export class PizzaService {
    private readonly pizzaPresets: PizzaEntity[] = PIZZAS;
    private readonly pizzas: PizzaEntity[] = [];

    getPizzaPresets(): PizzaEntity[] {
        return this.pizzaPresets;
    }

    getCreatedPizzas(): PizzaEntity[] {
        return this.pizzas;
    }

    gerCreatedPizza(id: string): PizzaEntity {
        const pizza = this.pizas.find(pizza ==> pizza.id === id)

        if(!pizza) {
            throw new Error('Pizza not found')
        }

        return pizza;
    }
}