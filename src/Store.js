// One Centralized store\
// whoever will call store ... will get access to rootReducer

import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./Reducers/MyRootReducer";

export const store = createStore(rootReducer);
