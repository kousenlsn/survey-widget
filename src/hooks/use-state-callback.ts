import { useEffect, useRef, useState } from "react";

type SetStateCallback<T> = (nextState: T, cb?: (nextData?: T) => void) => void;

export const useStateCallback = <T>(
  initialState: T
): [T, SetStateCallback<T>] => {
  const [state, setState] = useState(initialState);
  const cbRef = useRef<(nextData?: T) => void>();

  const setStateCallback: SetStateCallback<T> = (nextState, cb) => {
    cbRef.current = cb;
    setState(nextState);
  };

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = undefined;
    }
  }, [state]);

  return [state, setStateCallback];
};
