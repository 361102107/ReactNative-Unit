import { LOGIN } from "./types";
import { handleActions } from "redux-actions";

const defaultState = null;

export const userInfo = handleActions(
    {
        [LOGIN]: (state, { payload }) => {
            
            return { ...state, ...payload };
        }
    },
    defaultState
);
