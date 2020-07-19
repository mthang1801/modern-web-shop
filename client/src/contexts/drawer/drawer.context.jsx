import {createContext} from "react";

const DrawerContext = createContext({showDrawer : false , setShowDrawer : () => {}});

export default DrawerContext ; 