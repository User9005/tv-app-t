import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import MainMenu from "./components/MainMenu"
import useScrollRestoration from "./hooks/useScrollRestoration"
import useDebouncedVisible from "./hooks/useDebouncedVisible"
import useIsLandscapeMobile from "./hooks/useIsLandscapeMobile"
import { useState } from "react"
import SidebarToggleButton from "./components/SidebarToggleButton"
import useScreenWidth from "./hooks/useScreenWidth"

const App = () => {
    const [showMovie, showMovieNow, hideMovie, triggerDelayedShow] = useDebouncedVisible(false, 2000);
    useScrollRestoration();
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const width = useScreenWidth();
    const isLandscapeMobile = useIsLandscapeMobile();
    const isMobile = width < 768;

    return (
        <>
            {!showMovie && (!isLandscapeMobile || sidebarOpen) &&
                <MainMenu
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />}

            {(isMobile || isLandscapeMobile) && (
                <SidebarToggleButton
                    sidebarOpen={sidebarOpen}
                    toggleSidebar={() => setSidebarOpen(prev => !prev)}
                />
            )}

            <div>
                <Routes>
                    <Route path='/' element={<Home
                        showMovie={showMovie}
                        showMovieNow={showMovieNow}
                        hideMovie={hideMovie}
                        triggerDelayedShow={triggerDelayedShow}
                        isLandscapeMobile={isLandscapeMobile}
                    />} />
                </Routes>
            </div>
        </>
    )
}

export default App