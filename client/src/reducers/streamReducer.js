
import { 
    CREATE_STREAM, 
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type){
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')}
        case FETCH_STREAM: 
            return {...state, [action.payload.id]: action.payload};
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload};        
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}
// const streamReducer = (state={}, action) => {
//     switch (action.type){
//         case EDIT_STREAM:
//             // v1
//             // const new State = {...state};
//             // new State[action.payload.id] = action.payload;
//             // return newState;

//             // v2
//             return {...state,[action.payload.id]: action.payload};
//         default:
//             return state;
//     }
// }