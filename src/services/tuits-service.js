import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE_A9;
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const findTuits = async () => {
    console.log(API_BASE)
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}


export const deleteTuit = async (tid) => {
    console.log(API_BASE)
    const response = await axios
        .delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}
