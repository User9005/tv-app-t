const getcardSize = (visibleItems:number = 8) => {
    const isMobile = window.innerWidth <= 640; 
    if (isMobile) return window.innerWidth * 0.4; 
    return window.innerWidth / visibleItems; // default behavior
  };

  export default getcardSize