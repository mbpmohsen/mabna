import {Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './components/Nav/Nav';

const Router = () => {
    return (
        <Routes> 
            <Route path="/" element={<Navbar/> }>
                <Route path="/" element={<Home/>}/>
                <Route path=":id" element={<div>Hello</div>}/>
            </Route>
        </Routes>
    )
}

export default Router;