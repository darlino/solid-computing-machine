export const UpdateViewsReducer = (state , action) => {
    switch (action.type){
        case "UPDATE":
            return state + 1;
        default:
            return state;
    }
}

export default UpdateViewsReducer