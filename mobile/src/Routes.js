
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "./screens/Login";
import Home from "./screens/Home";
import DetalheHome from "./screens/DetalheHome";

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Home,
        DetalheHome
    })
);

export default Routes;