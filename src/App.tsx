import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import MainMenu from "./components/MainMenu"
import useScrollRestoration from "./components/useScrollRestoration"

const App = () => {
    useScrollRestoration()
    return (
        <>
            <MainMenu/>
            <div>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App