import { Link } from 'react-router-dom'
import type { NavLink } from '../types'

const MenuItem = ({
                      name,
                      path,
                      icon,
                      sidebarOpen,
                      setSidebarOpen
                  }: NavLink) => {

    return (
        <Link 
            to={path}
            className='sidebarItem'
            onClick={()=>{setSidebarOpen(false)}}
            >
            <img className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8' src={icon} alt={name} />
            <span className={`hidden group-hover:inline-block whitespace-nowrap ${sidebarOpen && "inline-block"}`}>
             {name}
             </span>
        </Link>
    )
}

export default MenuItem

