import { createContext, useState } from "react";

const EditContext = createContext();

const EditProvider = ({ children }) => {

    const [noteId, setNoteId] = useState();

    return (
        <EditContext.Provider value={{
            noteId,
            setNoteId
        }}>
            {children}
        </EditContext.Provider>
    );
};

export { EditProvider }
export default EditContext;