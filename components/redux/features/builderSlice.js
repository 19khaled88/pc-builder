import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  data: [],
  isSuccess: false,
  isLoading: true,
  isError: false,
}

export const BuilderSlice = createSlice({
  name: 'builder_slice',
  initialState,
  reducers: {
    getBuilder: (state) => {
      const storage = localStorage.getItem('pcBuilder')
      if (storage) {
        state.data = JSON.parse(storage)
      }
    },
    addBuilder: (state, action) => {
      const index = state.data.findIndex(
        (singleData) => singleData.id === action.payload.id,
      )
      if (index === -1) {
        state.data.push(action.payload)
        state.isLoading = false
        localStorage.setItem('pcBuilder', JSON.stringify(state.data))
      } else {
        toast('already have this product')
      }
      // state.data.push(action.payload)
    },
    removeBuilder: (state, action) => {
      const local = JSON.parse(localStorage.getItem('pcBuilder'))
      const temp = local.filter(
        (element) => element.category !== action.payload,
      )
      if (temp) {
        localStorage.setItem('pcBuilder', JSON.stringify(temp))
        state.data = temp
      }
    },
    completeBuilder: (state, action) => {
      const temp = localStorage.removeItem('pcBuilder')
     
      state.data = []
      
    },
  },
})

export const {
  addBuilder,
  getBuilder,
  removeBuilder,
  completeBuilder,
} = BuilderSlice.actions
export default BuilderSlice.reducer
