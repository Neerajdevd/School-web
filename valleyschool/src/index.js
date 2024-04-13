import React from "react";
import ReactDOM  from "react-dom/client";
// import App from "./App";
import routes from "./routes/index";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RouterProvider } from "react-router-dom";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars,faPlus ,faUser,faClipboard,faMagnifyingGlass,faGift} from '@fortawesome/free-solid-svg-icons'


import "./index.css";



library.add(faEnvelope,faBars,faPlus,faUser,faClipboard,faMagnifyingGlass,faGift)

const App = () => {
    return ( 
        <RouterProvider router={routes} />  
    ); 
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); 
