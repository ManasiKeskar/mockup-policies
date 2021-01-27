const openPanelReducer = (state = false, action) => {
    switch(action.type) {
        case 'OPENPANEL' :
            return !state;
        default :
            return state;
    }
}

export default openPanelReducer;