import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
//import BehaviorBasedCard from './BehaviorBasedCard';
import BehaviorBasedCard from './BehaviorBasedCard';
import SlidingPanelComponent from './SlidingPanelComponent';
import { useDispatch } from 'react-redux';
import { openPanel } from './../actions';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
}));

function BehaviorBasedCardList(props) {

    const dispatch = useDispatch();

    const  policyData  = props.policyData;
    const [policyName, setPolicyName] = useState(policyData[0].name);

    function displayCardDetails(event) {
        setPolicyName(event.target.value);
        console.log("in displayCardData, policy name = ", policyName);
        dispatch(openPanel());
        // return(
        //     <div>
        //         {policyData.filter(policy => policy.name==={policyName}).map(policy => (
        //             <SlidingPanelComponent {...policy} /> ))}
        //     </div>
        // );
    }
        
    // console.log("In BehaviorBasedCardList", policyData);
    
    const classes = useStyles();

    return (
        <div>
            <div>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="flex-start" spacing={3}>
                            {policyData.map(policy => (
                                <Grid item xs={3} key={policy.name}>
                                    <BehaviorBasedCard policy={policy} showCardDetails={displayCardDetails}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            {policyData.filter(policy => policy.name==={policyName}).map(policy => (
                    <SlidingPanelComponent {...policy} /> ))}
        </div>
    );
}

export default BehaviorBasedCardList;