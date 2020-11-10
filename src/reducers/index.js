import { combineReducers } from 'redux';


const initialState = {leaders: [{ name: 'Neymar', point: 97},
{ name: 'Messi', point: 98},
{ name: 'Cristiano', point: 99},
{ name: 'M Salah', point: 91},
{ name: 'Gnarby', point: 77}]};

const LeadersReducer = ( state = initialState , action) => {

    if(action.type === 'ADD_LEADER') {

        const newPoint = Number(action.payload.point);

        action.payload.point = newPoint;

        return {...state, leaders: [...state.leaders, action.payload]}
     
    } else if(action.type === 'INCREMENT_POINTS') {

        const index = state.leaders.findIndex( leader => leader.name === action.payload.name );

        const newArray = [...state.leaders];

        newArray[index].point = action.payload.point + 1;

        return {
            ...state,
            leaders: newArray
        }

    } else if(action.type === 'DECREMENT_POINTS') {

        const index = state.leaders.findIndex( leader => leader.name === action.payload.name );

        const newArray = [...state.leaders];

        newArray[index].point = action.payload.point - 1;

        return {
            ...state,
            leaders: newArray
        }

    }

    return state;
}


export default combineReducers({
    leaders: LeadersReducer
});