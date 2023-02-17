import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";


const store = configureStore({
   //REDUCERS CONFIGURATI QUA DENTRO
   reducer: mainReducer,

})

export default store;