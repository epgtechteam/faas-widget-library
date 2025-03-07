import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DemoApp from "./DemoApp";
import React from "react";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <DemoApp />
    </StrictMode>
);
