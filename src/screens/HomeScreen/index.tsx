import * as React from "react";
import classes from "./styles.module.scss";
import { inject, observer } from "mobx-react";
import NavBar from "components/NavBar";

const HomeScreen: React.FC = observer(() => {
  return (
    <div >
      <NavBar />
    </div>
  );
});
export default HomeScreen;
