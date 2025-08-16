import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

type SidebarToggleButtonProps = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
};

const SidebarToggleButton: React.FC<SidebarToggleButtonProps> = ({
  sidebarOpen,
  toggleSidebar,
}) => {
  const [showX, setShowX] = useState<boolean>(false);

  useEffect(() => {
    if (sidebarOpen) {
      const timer = setTimeout(() => {
        setShowX(true);
      }, 50);

      return () => clearTimeout(timer);
    } else {
      setShowX(false);
    }
  }, [sidebarOpen]);

  return (
    <button
      className={`fixed ${sidebarOpen ? "top-6 left-50" : "top-6 left-6 "} z-50 md:hidden cursor-pointer`}
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
    >
      {sidebarOpen ? (
        <span><X className={`absolute inset-0 w-6 h-6 text-white transition-opacity duration-500 delay-200 ${showX ? 'opacity-100' : 'opacity-0'}`} /></span>
      ) : (
        <span><Menu className={`absolute inset-0 w-6 h-6 text-white transition-opacity duration-500 delay-200 ${!showX ? 'opacity-100' : 'opacity-0'}`} /></span>
      )}
    </button>
  );
};

export default SidebarToggleButton;
