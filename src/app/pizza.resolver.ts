import { Injectable }  from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PizzaEntity } from 'api/lib/api-interface';
import { Observable, filter, take } from 'rxjs';
import { PizzasStateService } from './shared/services/pizza-state.service';

@Injectable ({ providedIn: 'root'})

export class PizzaResolver implements Resolve<PizzaEntity[]> {
    resolve(route: ActivatedRouteSnapshot): Observable<PizzaEntity[]> {
        return this.pizzasStateService.pizzas$.pipe(
            filter((pizzas) => !!pizza.length),
            take(1)
        );
    }

    constructor(private pizzasStateService: PizzasStateService) {}
}