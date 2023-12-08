import React from "react";
import ReactDOMClient from "react-dom/client";
import { EcranFin } from "./screens/EcranFin";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<EcranFin />);
