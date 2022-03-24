import { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {

    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const closeCreateModal = () => {
        setIsCreateOpen(false);
    }

    const openCreateModal = () => {
        setIsCreateOpen(true);
    }

    const closeEditModal = () => {
        setIsEditOpen(false);
    }

    const openEditModal = () => {
        setIsEditOpen(true);
    }

    return (
        <ModalContext.Provider value={{
            isCreateOpen,
            closeCreateModal,
            openCreateModal,
            isEditOpen,
            closeEditModal,
            openEditModal
        }}>
            {children}
        </ModalContext.Provider>
    );
};

export { ModalProvider }
export default ModalContext;