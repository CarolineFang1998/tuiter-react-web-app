import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "/tuiter/images/nasa.jpeg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
   name: 'tuits',
   initialState: tuits,
   reducers: {
       createTuit(state, action) {
           state.unshift({
                             ...action.payload,
                             ...templateTuit,
                             _id: (new Date()).getTime(),
                         })
       },
       deleteTuit(state, action) {
           const index = state
               .findIndex(tuit =>
                              tuit._id === action.payload);
           state.splice(index, 1);
       },
       updateLike(state, action) {
              const index = state
                .findIndex(tuit =>
                               tuit._id === action.payload);
              state[index].liked = !state[index].liked;
              state[index].likes += state[index].liked ? 1 : -1;
       },
   }

});

export const {createTuit, deleteTuit, updateLike} = tuitsSlice.actions;
export default tuitsSlice.reducer;