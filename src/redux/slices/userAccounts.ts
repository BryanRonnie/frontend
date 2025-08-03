import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type AppPreferencesState = {
    loginParams: LoginParams;
};

type LoginParams = {
    username?: string;
    email?: string;
    password?: string;
};

const initialState: AppPreferencesState = {
    loginParams: {},
};

export const userAccountsSlice = createSlice({
    name: 'userAccounts',
    initialState,
    reducers: {
        updateLoginParams: (state, action: PayloadAction<LoginParams>) => {
            state.loginParams = action.payload;
        },
    }
});

export const { updateLoginParams } = userAccountsSlice.actions;
export default userAccountsSlice.reducer;