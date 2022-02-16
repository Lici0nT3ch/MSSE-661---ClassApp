import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, shareReplay, tap } from 'rxjs';
import { PizzaResponse, PizzasService } from './pizza.service';


@Injectable({providedIn: 'root'})

export class PizzasStateService {
    private readonly pizzas = new BehaviorSubject<PizzaEntity[]>([]);
    readonly pizzas$ = this.pizzas.asObervable();

    constructor(private pizzasService: PizzasService) {
        this.loadPizzaPreset().subscribe();
    }

    loadPizzaPreset(): Observable<PizzaEntity[]> {
        return this.pizzasService
        .getPizzaPresets()
        .pipe(map((data: PizzaResponse) => data.pizzas),
        tap(pizzas => {
            this.pizzas.next(pizzas);
        }),
        shareReplay(1);
        );
    }
}