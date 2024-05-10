import styles from "./TerrariumList.module.css";
import { HomeLayer } from "../../components/HomeLayer/HomeLayer";
import { HeaderList } from "./components/HeaderList/HeaderList";

export const TerrariumList = () => {
  // create 2 components for dashboard and add register
  // then a component will be rendered by a context state
  // remember this components will be appended to the suspense
  // the components will be lazily loaded
  return (
    <HomeLayer>
      <HeaderList />
    </HomeLayer>
  );
};
