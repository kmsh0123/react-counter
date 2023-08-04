import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value : 5
}

export const CounterSlice = createSlice({
    name : "counter",
    initialState,
    reducers: {
        increment:(state) => {
            state.value += 10;
        },
        decrement:(state) => {
            if(state.value > 0){
                state.value -= 1;
            }
                
        }
    }

});

export const {increment,decrement} = CounterSlice.actions;

export default CounterSlice.reducer;
