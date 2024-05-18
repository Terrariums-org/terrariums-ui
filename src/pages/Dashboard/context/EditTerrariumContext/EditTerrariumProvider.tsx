import { ReactNode, useState } from "react";
import { EditTerrariumContext } from "./EditTerrariumContext";
import { EditTerrariumI } from "../../../../entities/entity";
import { INITIAL_STATE_EDIT_TERRARIUM } from "../../../../constants";

interface Props {
  children: ReactNode;
}

export const EditTerrariumProvider: React.FC<Props> = ({ children }) => {
  const [editTerrariumState, changeTerrariumState] = useState<EditTerrariumI>(
    INITIAL_STATE_EDIT_TERRARIUM
  );
  return (
    <EditTerrariumContext.Provider
      value={{ editTerrariumState, changeTerrariumState }}
    >
      {children}
    </EditTerrariumContext.Provider>
  );
};
