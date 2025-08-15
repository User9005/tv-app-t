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
      className="fixed top-6 left-4 z-50 md:hidden cursor-pointer"
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
    >
      {sidebarOpen ? (
        <X className="w-6 h-6 text-white" />
      ) : (
        <Menu className="w-6 h-6 text-white" />
      )}
    </button>
  );
};

export default SidebarToggleButton;
