import { configureStore } from '@reduxjs/toolkit'
import stringreducer from '../Slice/Stringslice'

export const store = configureStore({
  reducer: {
    string:stringreducer 
  },
})