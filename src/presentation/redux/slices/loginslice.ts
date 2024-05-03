import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginResponse } from "../../../domain/models/LoginResponse";
import container from "../../../di/dependencies";
import { LoginUseCase } from "../../../domain/usecases/loginusecase";

const initialState: {data: LoginResponse | null; loading: 'idle' | 'pending' | 'fulfill'} = {
    data: null,
    loading: 'idle'
}

const login = createAsyncThunk('login', async() => {
    let loginuseCase = container.get<LoginUseCase>('loginusecase');
    return loginuseCase.login();
});

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            
        })
        .addCase(login.fulfilled, (state, action) => {
            
        })
        .addCase(login.rejected, (state, action) => {

        })
    }
});

export {login}
export default loginSlice.reducer