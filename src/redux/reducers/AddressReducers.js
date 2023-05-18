import { ADD_ADDRESS, DELETE_ADDRESS } from '../ActionTypes';
export const AddressReducers = (state = [], action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            return [...state, action.payload];
        case DELETE_ADDRESS:
            const deletedArrary1 = state.filter((item, index) => {
                return index !== action.payload;
            });
            return deletedArrary1;

        default:
            return state;
    }
};

export default AddressReducers;
