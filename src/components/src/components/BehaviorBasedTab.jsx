import React from 'react';
import BehaviorBasedCardList from './BehaviorBasedCardList';
import './BehaviorCardDataPanelProperties.css'

const BehaviorBasedTab = props => {
    const policyData = props.policyData;
        
    console.log("In Behavior Based Tab", policyData);
    
    return (
        <div> 
            <div className="BehaviorCardData-container">
                <h3>Behavior Based Policies ({policyData.length})</h3>
                <BehaviorBasedCardList policyData={policyData} />
            </div>
        </div>
    );
};

export default BehaviorBasedTab;