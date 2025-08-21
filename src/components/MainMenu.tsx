import { Link } from 'react-router-dom'
import { assets, navLinks } from '../assets/assets';
import MenuItem from './MenuItem';
import { useEffect } from 'react';
import useIsLandscapeMobile from '../hooks/useIsLandscapeMobile';

type MainMenuProps = {
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainMenu = ({sidebarOpen, setSidebarOpen} : MainMenuProps) => {
    const isLandscapeMobile = useIsLandscapeMobile();

    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [sidebarOpen]);

    return (
        <>
            <div className={`group relative h-full`}>

                <div className={`sidebar no-scrollbar
                     ${sidebarOpen && isLandscapeMobile ? 'min-w-[250px]' : ''}
                     ${sidebarOpen && !isLandscapeMobile ? 'max-md:w-[250px]' : 'max-md:w-0'}`}>

                    <div className={`flex flex-col px-4`}>
                        {/* Profile */}
                        <div className={`sidebarHeader ${sidebarOpen && "opacity-100 transition-opacity duration-200"} md:mb-[30px]`}>
                            <img className="w-21 h-21 rounded-full object-cover -ml-7 sm:-ml-8 md:-ml-10 lg:-ml-12"
                                src={assets.profileImage}
                                alt="Profile Image"
                            />
                            <span>Daniel</span>
                        </div>

                        {/* Menu Items */}
                        <div className={`sidebarBody`}>
                            {navLinks.map((link, index) => (
                                <MenuItem key={index} {...link} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                            ))}
                        </div>

                        {/* Footer links  */}
                        <div className={`sidebarFooter ${sidebarOpen && "opacity-100 transition-opacity duration-300"} ${isLandscapeMobile ? "hidden" : ""} `}>
                            <Link onClick={() => { setSidebarOpen(false) }} to="/language">Language</Link>
                            <Link onClick={() => { setSidebarOpen(false) }} to="/privacy">Privacy</Link>
                            <Link onClick={() => { setSidebarOpen(false) }} to="/terms">Terms</Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MainMenu















