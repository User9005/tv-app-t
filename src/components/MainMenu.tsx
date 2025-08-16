import { Link } from 'react-router-dom'
import { assets, navLinks } from '../assets/assets';
import MenuItem from './MenuItem';
import { useState } from 'react';
import SidebarToggleButton from './SidebarToggleButton';

const MainMenu = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    }

    return (
        <>
            <div className="group relative h-full ">
                <div
                    className={`
                    bg-gradient-to-r from-[#040404] to-[#040404]/80
                    fixed top-0 left-0  z-50 h-screen overflow-hidden
                    ${sidebarOpen ? 'w-[250px]' : 'w-0'}        
                    text-white transition-all duration-240 ease-in-out
                    md:group-hover:w-[300px]
                    md:w-[160px] lg:w-[180px] xl:w-[200px] md:overflow-visible
                    xl:group-hover:w-[360px]
                    lg:group-hover:w-[320px]
                    items-center group-hover:items-start
                    `}
                    >

                    <div className="h-full flex flex-col px-4">
                        {/* Profile */}
                        <div className={`sidebarHeader ${sidebarOpen && "opacity-100 transition-opacity duration-1000"} md:mb-[47px]`}>
                            <img
                                className="w-21 h-21 rounded-full object-cover -ml-7 sm:-ml-8 md:-ml-10 lg:-ml-12 
                                " 
                                src={assets.profileImage}
                                alt="Profile Image"
                            />
                            <span className="text-white">Daniel</span>
                        </div>

                        {/* Menu Items */}
                        <div className='.sidebarBody'>
                            {navLinks.map((link, index) => (
                                <MenuItem key={index} {...link} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}  />
                            ))}
                        </div>

                        {/* Footer links  */}
                        <div className={`sidebarFooter ${sidebarOpen && "opacity-100 transition-opacity duration-300"}`}>
                            <Link onClick={()=>{setSidebarOpen(false)}} to="/language">Language</Link>
                            <Link onClick={()=>{setSidebarOpen(false)}} to="/privacy">Privacy</Link>
                            <Link onClick={()=>{setSidebarOpen(false)}} to="/terms">Terms</Link>
                        </div>

                    </div>

                </div>
                <SidebarToggleButton
                    sidebarOpen={sidebarOpen}
                    toggleSidebar={toggleSidebar}
                />

            </div>
        </>
    )
}

export default MainMenu















