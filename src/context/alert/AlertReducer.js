const alertReducer = (state,action) =>{
    switch (action.type){
        case 'SET_ALERT':
            return action.payload
        case 'REMOVE_ALERT':
             return {msg:'',type:''};
        default:
            return state;
    }
}

export default alertReducer