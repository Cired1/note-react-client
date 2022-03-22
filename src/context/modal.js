import { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {

    const [isCreateOpen, setIsCreateOpen] = useState(false);

    const closeCreateModal = () => {
        setIsCreateOpen(false);
    }

    const openCreateModal = () => {
        setIsCreateOpen(true);
    }

    return (
        <ModalContext.Provider value={{ isCreateOpen, closeCreateModal, openCreateModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export { ModalProvider }
export default ModalContext;