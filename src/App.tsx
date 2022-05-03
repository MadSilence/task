import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./components/HomePage";
import React from "react";
import ResultPage from "./components/ResultPage";
import "./App.css"


const App = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/:word'} element={<ResultPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;