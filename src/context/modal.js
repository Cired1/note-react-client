import { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    }

    const openModal = () => {
        setIsOpen(true);
    }

    return (
        <ModalContext.Provider value={{ isOpen, closeModal, openModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export { ModalProvider }
export default ModalContext;