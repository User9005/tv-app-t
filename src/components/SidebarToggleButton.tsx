import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import useIsLandscapeMobile from '../hooks/useIsLandscapeMobile';

type SidebarToggleButtonProps = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
};

const SidebarToggleButton = ({
  sidebarOpen,
  toggleSidebar,
}: SidebarToggleButtonProps) => {
  const [showX, setShowX] = useState<boolean>(false);
  const isLandscapeMobile = useIsLandscapeMobile();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (sidebarOpen) {
      timer = setTimeout(() => {
        setShowX(true);
      }, 50);
    } else {
      setShowX(false);
    }

    return () => clearTimeout(timer);
  }, [sidebarOpen]);

  return (
    <button
      className={`fixed ${sidebarOpen ? "top-6 left-50" : "top-6 left-6 "} z-50 cursor-pointer ${!isLandscapeMobile && window.innerWidth >= 1024 ? "hidden" : ""}`}
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













