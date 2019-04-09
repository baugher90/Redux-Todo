import { ADD_TODO }from '../Actions';

const initialState = {
    todo: [],
}

export const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_TODO:
        return {
            ...state,
            todo: action.payload
        };
        default:
            return state;
    }
};
