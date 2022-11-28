import React from 'react';

// @routers
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// @styles
import styles from './styles/StylesApp.module.scss';

// @components
import CodeSplittingComponent from "./components/code-splitting/CodeSplitting.component";
import MainLayout from "./layout/MainLayout.component";

// @pages
import Hooks from "./pages/hooks/Hooks.page";
import CodeSplitting from "./pages/code-splitting/CodeSplitting.page";


function App() {
    return (
        <Router>
            <MainLayout>
                    <Routes>
                        <Route path='/hooks' element={<Hooks/>}/>
                        <Route path='/code-splitting' element={<CodeSplittingComponent />}/>
                    </Routes>
            </MainLayout>
        </Router>
    );
}

export default App;
