import { useState, useEffect, useRef, Ref } from 'react';

export function useClickOutside(initialIsVisible: any) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref: Ref<any> = useRef(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}
