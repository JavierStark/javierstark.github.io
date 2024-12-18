import App from "./App";
import './index.css'
import {createRoot} from 'react-dom/client';
import {HashRouter} from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<HashRouter> <App/> </HashRouter>);