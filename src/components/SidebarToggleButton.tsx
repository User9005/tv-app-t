import { Menu, X } from 'lucide-react';

type SidebarToggleButtonProps = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
};

const SidebarToggleButton: React.FC<SidebarToggleButtonProps> = ({
  sidebarOpen,
  toggleSidebar,
}) => {
  return (
    <button
      className={`fixed ${sidebarOpen ? "top-6 left-50" : "top-6 left-6 "} z-50 md:hidden cursor-pointer`}
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
    >
      
      {sidebarOpen ? (
        <span className={`absolute opacity-0 transition-opacity duration-1400  ease-in-out eas ${sidebarOpen ? "opacity-100" : "0"}`} ><X className="w-6 h-6 text-white"/></span>
      ) : (
        <span><Menu className="w-6 h-6 text-white" /></span>
        
      )}
    </button>
  );
};

export default SidebarToggleButton;
