import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import MainMenu from "./components/MainMenu"
import useScrollRestoration from "./components/useScrollRestoration"
import useDebouncedVisible from "./hooks/useDebouncedVisible"

const App = () => {
    const [showMovie, showMovieNow, hideMovie, triggerDelayedShow] = useDebouncedVisible(false, 2000);
    useScrollRestoration()

    return (
        <>
            {!showMovie && <MainMenu showMovie={showMovie} />}
            <div>
                <Routes>
                    <Route path='/' element={<Home
                    showMovie={showMovie}
                    showMovieNow={showMovieNow}
                    hideMovie={hideMovie}
                    triggerDelayedShow={triggerDelayedShow}
                    />}/>
                </Routes>
            </div>
        </>
    )
}

export default App