import { useContext } from "react";
import { CreateModal, CreateNote, EditModal, EditNote } from ".."
import ModalContext from "../../context/modal";

const Modals = () => {
    const { isEditOpen, isCreateOpen } = useContext(ModalContext);

    return (
        <>
            {
                isCreateOpen &&
                <CreateModal>
                    <CreateNote />
                </CreateModal>
            }

            {
                isEditOpen &&
                <EditModal>
                    <EditNote />
                </EditModal>
            }

        </>
    )
}

export default Modals
