import { configureStore } from '@reduxjs/toolkit'

// ******************** Slices
import TestReducer from './features/test/test'

export const store = configureStore({
    reducer: {
        TestReducer
    }
})



