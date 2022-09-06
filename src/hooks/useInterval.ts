import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback); // callback 을 저장해줄 ref 생성

  // callback이 바뀔 때마다 ref를 업데이트 해준다.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다
      return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
    }
  }, [delay]);
}
