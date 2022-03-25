import axios from "axios";

const BASE_URL = "http://localhost:8000/api/notes"

const getNotes = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(BASE_URL, config);
    return response.data;
}

const getNote = async (token, id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(BASE_URL + `/${id}`, config);
    return response.data;
}

const createNote = async (token, note) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(BASE_URL, note, config);
    return response.data;
}

const updateNote = async (token, id, note) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(BASE_URL + `/${id}`, note, config);
    return response.data;
}

const deleteNote = async (token, id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(BASE_URL + `/${id}`, config);
    return response.data;
}

const noteService = {
    getNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote
}

export default noteService;