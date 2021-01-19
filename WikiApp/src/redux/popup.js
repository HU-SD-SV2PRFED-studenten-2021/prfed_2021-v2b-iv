import { createSlice } from 'https://cdn.skypack.dev/@reduxjs/toolkit@^1.2.3';


function show() {
  return true

}
function hidde() {
  return false

}
const popup = createSlice({
  name: 'popup',
  initialState: false,
  reducers: {
    open: show,
    close: hidde
  }
})

export const {
  open,
  close
} = popup.actions

export default popup.reducer