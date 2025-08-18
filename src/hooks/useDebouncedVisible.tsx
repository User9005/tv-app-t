import { useState, useEffect, useRef } from 'react';

function useDebouncedVisible(initial = false, delay = 2000) {
    const [visible, setVisible] = useState(initial);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
    function show() {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setVisible(true);
    }
  
    function hide() {
      setVisible(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  
    function hideThenShow() {
      hide();
      timeoutRef.current = setTimeout(() => {
        setVisible(true);
        timeoutRef.current = null;
      }, delay);
    }
  
    useEffect(() => {
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }, []);
  
    return [visible, show, hide, hideThenShow] as const;
  }
  
export default useDebouncedVisible;