import { useState, useEffect, RefObject, useLayoutEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

type ResizeObserverData = [number, number];

const useResizeObserver = <T extends HTMLElement>(
  ref: RefObject<T>,
): ResizeObserverData => {
  const [width, setWidth] = useState<number>(1);
  const [height, setHeight] = useState<number>(1);

  useLayoutEffect(() => {
    if (ref && ref.current) {
      setWidth(ref.current.clientWidth);
      setHeight(ref.current.clientHeight);
    }
  }, [ref]);

  useEffect(() => {
    if (ref && ref.current) {
      const element = ref.current;
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) return;
        if (!entries.length) return;

        const entry = entries[0];

        setWidth(entry.contentRect.width);
        setHeight(entry.contentRect.height);
      });
      resizeObserver.observe(element);
      return () => resizeObserver.unobserve(element);
    }
    return () => undefined;
  }, [ref]);

  return [width, height];
};

export default useResizeObserver;
