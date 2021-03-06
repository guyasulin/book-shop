import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAuth from './reducers/auth.reducer';
import * as fromBook from '../modules/books-shelf/state/book.reducer';
import * as fromRouter from '@ngrx/router-store';


export interface AppState {

  [fromAuth.authFeatureKey]: fromAuth.State;

  [fromBook.bookFeatureKey]: fromBook.State;

  router: fromRouter.RouterReducerState

}

export const reducers: ActionReducerMap<AppState> = {

  [fromAuth.authFeatureKey]: fromAuth.reducer,

  [fromBook.bookFeatureKey]: fromBook.reducer,
  
  router: fromRouter.routerReducer,

};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
