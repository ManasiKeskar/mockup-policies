import React from 'react';
import BehaviorBasedCardList from './BehaviorBasedCardList';

const BehaviorBasedTab = props => {
    const policyData = props.policyData;
        
    console.log("In Behavior Based Tab", policyData);
    
    return (
        <div>
            <h3>Behavior Based Policies ({policyData.length})</h3>
            <BehaviorBasedCardList policyData={policyData} />
        </div>
    );
};

export default BehaviorBasedTab;