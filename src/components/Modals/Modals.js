import { CreateModal, CreateNote, EditModal, EditNote } from ".."

const Modals = () => {
    return (
        <>
            <CreateModal>
                <CreateNote />
            </CreateModal>
            <EditModal>
                <EditNote />
            </EditModal>
        </>
    )
}

export default Modals
