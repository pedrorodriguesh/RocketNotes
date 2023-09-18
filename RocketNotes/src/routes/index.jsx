import { BrowserRouter } from "react-router-dom"; // router-dom => npm install

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
    return(
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}