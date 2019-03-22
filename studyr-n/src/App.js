import React from "react";
import storeFun from "./store";
import { Text } from "react-native";
import { Provider } from "react-redux";
import Route from "./routes";

global.store = storeFun();


export default function() {
    return (
        <Provider store={store}>
            <Route />
        </Provider>
    );
}
