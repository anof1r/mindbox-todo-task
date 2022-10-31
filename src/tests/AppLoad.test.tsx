import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import { store } from "../store";

test('App loads with no crushes and errors', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
})