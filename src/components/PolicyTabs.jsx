import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import BehaviorBasedTab from './BehaviorBasedTab';
import RuleBasedTab from './RuleBasedTab.jsx';
import TabularBasedPolicyData from './TabularBasedPolicyData';

const PolicyTabs = props => {

    console.log("in PolicyTabs", props);
    const { match } = props;
    const { params } = match;
    const { page } = params;
    const { history } = props;

    const policyData = props.policyData;
    const showCardDetails = props.showCardDetails;
    // console.log("In PolicyTabs", policyData);
    // console.log("In Policy Tab ", showCardDetails);

    const tabNameToIndex = {
        0: 'RuleBasedTab',
        1: 'BehaviorBasedTab',
        2: 'TabularBasedPolicyData'
    };

    const indexToTabName = {
        RuleBasedTab: 0,
        BehaviorBasedTab: 1,
        TabularBasedPolicyData: 2
    };

    const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

    const handleChange = (event, newSelectedTab) => {
        history.push(`/Policies/${tabNameToIndex[newSelectedTab]}`);
        setSelectedTab(newSelectedTab);
    }

    return (
        <>
            <Tabs value={selectedTab} onChange={handleChange}>
                <Tab label="Rule-Based" />
                <Tab label="Behavior-Based" />
                <Tab label="Tabular-Format" />
            </Tabs>
            {selectedTab === 0 && <RuleBasedTab />}
            {selectedTab === 1 && <BehaviorBasedTab policyData={policyData} showCardDetails={showCardDetails}/>}
            {selectedTab === 2 && <TabularBasedPolicyData policyData={policyData} showCardDetails={showCardDetails}/>}
        </>
    );
}

export default PolicyTabs;