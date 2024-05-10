import styles from "./HomeLayer.module.css";
import { ReactNode, useState } from "react";
import { TerrariumHeader } from "../TerrariumHeader/TerrariumHeader";
import Dashboard from "../../assets/svg/dashboard.svg";
import AddIcon from "../../assets/svg/add.svg";
import LogoutIcon from "../../assets/svg/logout.svg";
import { ItemNav } from "../ItemNav/ItemNav";
import { useLocation } from "wouter";

interface Props {
  children: ReactNode;
}

export const HomeLayer: React.FC<Props> = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState<string>("Dashboard");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_location, setLocation] = useLocation();
  return (
    <main className={styles.main}>
      <nav>
        <TerrariumHeader />
        <ol>
          <ItemNav
            handleClick={() => setSelectedItem("Dashboard")}
            selectedItem={selectedItem}
            title="Dashboard"
            imgUrl={Dashboard}
            altImg="Dashboard img"
          />
          <ItemNav
            handleClick={() => setSelectedItem("Agregar registro")}
            selectedItem={selectedItem}
            title="Agregar registro"
            imgUrl={AddIcon}
            altImg="Add icon"
          />
          <div className={styles.logoutContainer}>
            <ItemNav
              handleClick={() => setLocation("/")}
              title="Cerrar sesión"
              imgUrl={LogoutIcon}
              altImg="Logout icon"
            />
          </div>
        </ol>
      </nav>
      <div className={styles.secondBody}>{children}</div>
    </main>
  );
};