import {Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './components/Nav/Nav';
import Asset from "./pages/Asset/Asset";
import {SearchContextProvider} from "./Contexts/SearchBox/SearchBox";

const Router = () => {
    return (
        <SearchContextProvider>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/asset/:asset_id" element={<Asset/>}/>
                </Route>
            </Routes>
        </SearchContextProvider>
    )
}

export default Router;