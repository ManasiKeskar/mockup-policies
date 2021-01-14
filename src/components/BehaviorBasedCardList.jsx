import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import BehaviorBasedCard from './BehaviorBasedCard';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
}));

function BehaviorBasedCardList(props) {
    const  policyData  = props.policyData;
        
    console.log("In BehaviorBasedCardList", policyData);
    
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="flex-start" spacing={3}>
                    {policyData.map(policy => (
                        <Grid item xs={3} key={policy.name}>
                            <BehaviorBasedCard policy={policy} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default BehaviorBasedCardList;