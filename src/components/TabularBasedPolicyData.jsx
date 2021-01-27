import React from 'react';
import BehaviorBasedCardTabularFormat from './BehaviorBasedCardTabularFormat';

const TabularBasedPolicyData = props => {
    const policyData = props.policyData;
        
    // console.log("In Tabular-Format Tab", policyData);
    
    return (
        <div> 
            <div className="BehaviorCardData-container">
                {/* <h3>Behavior Based Policies ({policyData.length})</h3> */}
                <BehaviorBasedCardTabularFormat policyData={policyData} />
            </div>
        </div>
    );
};

export default TabularBasedPolicyData;