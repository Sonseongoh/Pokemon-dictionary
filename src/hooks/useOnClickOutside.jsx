import React, { useEffect } from "react";

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = () => {
      //모달안을 클릭할경우
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);

  return <div>useOnClickOutside</div>;
};

export default useOnClickOutside;
