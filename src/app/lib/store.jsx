import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./features/basket/basketSlice"
import jsonReducer from "./features/myJson/myJsonSlice"
import formReducer from "./features/form/formSlice"

export const store = configureStore({
	reducer: {
        basket: basketReducer,
        json: jsonReducer,
        form: formReducer,
    },
})

export default store;