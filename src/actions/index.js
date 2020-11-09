export const addLeader = (leader) => {
    return {
        type: 'LEADER_ADDED',
        payload: leader
    };
};

export const incrementPoint = (leader) => {

    return {
        type: 'INCREMENT_POINTS',
        payload: {
            name: leader.name,
            point: leader.point
        }
    };
};

export const decrementPoint = (leader) => {
    return {
        type: 'DECREMENT_POINTS',
        payload: {
            name: leader.name,
            point: leader.point
        }
    };
};