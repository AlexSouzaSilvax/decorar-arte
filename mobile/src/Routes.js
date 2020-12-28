import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Home from "./screens/Home";
import DetalheHome from "./screens/DetalheHome";

const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
        DetalheHome
    })
);

export default Routes;