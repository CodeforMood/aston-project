import { AuthAction } from "./auth";
import { favouritesActions } from "./favourites";
import { historyActions } from "./history";
import { MoviesAction } from "./movies";

export type Action = AuthAction | historyActions | favouritesActions | MoviesAction 
