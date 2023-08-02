import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CriptocurrencyManagerService } from 'src/app/modules/home/services/criptocurrency-manager.service';
import { LOAD_ASSETS, loadAssetsSuccess } from './assets.actions';
import { EMPTY, catchError, exhaustMap, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AssetsEffects {

    constructor(private action: Actions, private readonly service: CriptocurrencyManagerService) { }

    _asset = createEffect(() =>
        this.action.pipe(
            ofType(LOAD_ASSETS),
            exhaustMap((action) => {
                return this.service.getAllCriptocurrency().pipe(
                    map((data) => {
                        return loadAssetsSuccess({ assetsList: data });
                    }),
                    catchError(() => EMPTY)
                )
            })
        )
    );

}
