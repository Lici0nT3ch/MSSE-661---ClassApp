import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, switchMap, map, of, concatMap } from "rxjs";
import { PizzasService } from "../../shared/services/pizza.service";
import { PizzaEntity } from "../../../../api/lib/api-interface";
import { savePizzas, savePizzasFailure, savePizzasSuccess } from ".";
import { loadPizzaPresets, loadPizzaPresetsFailure, loadPizzaPresetsSuccess } from "./pizzas.actions";

@Injectable({ providedIn: 'root' })
export class PizzasEffects {
  loadPizzas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPizzaPresets),
      switchMap(() =>
        this.pizzasService.getPizzaPresets().pipe(
          map(({ pizzas }) => loadPizzaPresetsSuccess({ pizzas })),
          catchError((error) => of(loadPizzaPresetsFailure({ error })))
        )
      )
    )
  );

  savePizzas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(savePizzas),
      concatMap(({ pizzas }) =>
        this.pizzasService.savePizzas(pizzas).pipe(
          map((pizzas) => savePizzasSuccess({ pizzas })),
          catchError((error) => of(savePizzasFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pizzasService: PizzasService
  ) {}
}
