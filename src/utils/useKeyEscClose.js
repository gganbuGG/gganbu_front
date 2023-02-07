import { useEffect } from "react";

export const useKeyEscClose = (closeModal) => {
  useEffect(() => {
    const escKeyModalClose = (e) => {
      if (e.keyCode === 27) {
        closeModal();
      }
    };
    window.addEventListener("keydown", escKeyModalClose);
    return () => window.removeEventListener("keydown", escKeyModalClose);
  }, []);
};
