

const inistate = 0;


const reducer = (state = inistate, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + Number(action.number);

        case "DECREMENT" :  return state - Number(action.number);

        default :  return state;
    }
}

export default reducer;