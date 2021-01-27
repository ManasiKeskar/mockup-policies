export const openPanel = () => {
    return {
        type : 'OPENPANEL'
    };
};

export const setPolicyDetails =({policy}) => {
    return {
        type : 'SETPOLICYDETAILS',
        policy : {policy}
    }
}