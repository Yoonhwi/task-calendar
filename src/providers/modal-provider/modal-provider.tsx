import { createContext, useState } from "react";

interface ModalContextInterface {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextInterface>({
  isModalOpen: false,
  setIsModalOpen: () => false,
});

export const ModalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const value = { isModalOpen, setIsModalOpen };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
