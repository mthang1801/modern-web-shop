import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import shopReducer from "./shop/shop.reducer";
import cartReducer from "./cart/cart.reducer";
import drawerReducer from "./drawer/drawer.reducer";
import directoryReducer from "./directory/directory.reducer";
import orderedReducer from "./ordered/ordered.reducer";
import cardPersonReducer from "./card-person/card-person.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: userReducer,
  shop: shopReducer,
  cart: cartReducer,
  directory: directoryReducer,
  ordered: orderedReducer,
  drawer: drawerReducer,
  cardPerson: cardPersonReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
