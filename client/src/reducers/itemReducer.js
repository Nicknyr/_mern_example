import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';


const initialState = {
    items: [
        // uuid generates random ids for the API
        {
            id: uuid(),
            name: "Eggs"
        },
        {
            id: uuid(),
            name: "Milk"
        },
        {
            id: uuid(),
            name: "Steak"
        },
        {
            id: uuid(),
            name: "Candy"
        }
    ]
};


export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS: {
            return {
                ...state
            };
        }
        case DELETE_ITEM: {
            return {
                ...state,
                // action.payload is the 'id' passed to DELETE_ITEM in the action, deletes the clicked on shopping item
                items: state.items.filter(item => item.id !== action.payload)
            }
        }
        case ADD_ITEM: {
            return {
                ...state,
                items: [ action.payload, ...state.items]
            }
        }
        default: return state;
    }
}