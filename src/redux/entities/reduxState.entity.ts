import { store } from "../indexStore";

export type RootState = ReturnType<typeof store.getState>;
