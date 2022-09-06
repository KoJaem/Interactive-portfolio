import { useEffect, useRef } from 'react';

export function useTimeout(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  // callback이 바뀔 때마다 ref를 업데이트 해준다.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  
  useEffect(() => {
    if (delay === null) {
      return;
      // return savedCallback.current();
    }

    const id = setTimeout(() => savedCallback.current(), delay);

    return () => clearTimeout(id);
  }, [delay]);
}
