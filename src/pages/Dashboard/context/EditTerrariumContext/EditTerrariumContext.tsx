import { Dispatch, SetStateAction, createContext } from "react";
import { EditTerrariumI } from "./editTerrariumContext.entity";
import { INITIAL_STATE_EDIT_TERRARIUM } from "../../../../constants";

interface EditTerrariumType {
  editTerrariumState: EditTerrariumI;
  changeTerrariumState: Dispatch<SetStateAction<EditTerrariumI>>;
}

export const EditTerrariumContext = createContext<EditTerrariumType>({
  editTerrariumState: INITIAL_STATE_EDIT_TERRARIUM,
  changeTerrariumState: () => {},
});
