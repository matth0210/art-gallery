import { createAction, props } from "@ngrx/store";

export const loadCuratedAction = createAction(
    '[resolver/photo component] Load Curated',
    props<{ perPage?: number, page?: number}>()
)