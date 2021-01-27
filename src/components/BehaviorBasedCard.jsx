import React, { Component, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardActions, Divider, Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
// import Avatar from '@material-ui/core/Avatar';
import { red, yellow } from '@material-ui/core/colors';
import PersonOutline from '@material-ui/icons/PersonOutline';
import WarningIcon from '@material-ui/icons/Warning';
import Switch from '@material-ui/core/Switch';
// import BehaviorBasedCardData from './BehaviorBasedCardData';
// import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { openPanel } from './../actions';
import Grid from '@material-ui/core/Grid';
import SlidingPanelComponent from './SlidingPanelComponent';
// import SlidingPane from "react-sliding-pane";
// import "react-sliding-pane/dist/react-sliding-pane.css";
import SeverityLabel from './SeverityLabel';



const useStyles = makeStyles((theme) => ({
	root: {
	  minWidth: 200,
	  display: 'flex',
	  alignItems: 'center',
	  
	},
	header: {
		Typography: 'noWrap',
		variant: "body2",
		height: theme.typography.h6.fontSize,
		width: theme.typography.h6.fontSize
	},
	WarningLevel: {	
		Color: yellow[500],
	},
	headerIcons: {
		position: "relative",
        top: theme.spacing(2),
        width: theme.typography.h6.fontSize,
        height: theme.typography.h6.fontSize,
		display: 'flex',
		alignItems: 'center',
		verticalAlign: theme.spacing(2),
	},
  }));

const BehaviorBasedCard = ({policy, showCardDetails}) => {

        const name = policy.name;
	    const description = policy.description;
	    const severity = policy.severity;

	    const classes = useStyles();

	    // const dispatch = useDispatch();
	
	    //This is used for handling the header checked button
	    const [state, setState] = useState({
		    checkedA: true,
		    checkedB: true,
	    });

	    const handleChange = (event) => {
		    setState({ ...state, [event.target.name]: event.target.checked});
        };

        const [policyName, setPolicyName] = useState(policy.name);

           
        // const [policyDetails, setPolicyDetails] = useState(policy);

	    // const showPolicyDetails = (event) => {
				
		//     // setPolicyDetails(policy);
        //     // console.log("in showPolicyDetails : policyDetails = ", policyDetails);
        //     event.preventDefault();
        //     console.log("in policy details", event.target.value);
        //     // dispatch(openPanel());
        //     // return (
        //     //     <SlidingPanelComponent policy={policy} />
        //     // );
		// }

	    return (
	    <div>
		    <Card className={classes.root}>
                <Grid item xs={12} sm container>
			        <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <PersonOutline />
                        </Grid>
                        <Grid item>
                        <CardHeader className={classes.header}
                            action={
                                // <IconButton>
                                <div className={classes.headerIcons}>
                                    <SeverityLabel severity={severity} />
                                    <WarningIcon />
                                    <Switch
                                        size='small'
                                        checked={state.checkedB}
                                        onChange={handleChange}
                                        color="primary"
                                        name="checkedB"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                </div>
                            }
                            title={name}
                        />
                        
                            <CardContent>
                                <div>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {description}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="caption" color="textSecondary" component = "p">
                                        App
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary" component = "p">
                                        Some
                                    </Typography>
                                </div>
                            </CardContent>
                            <Divider></Divider>
                            <CardActions>
                                <button size="small" color="primary" value={name} onClick={showCardDetails}>
                                    Edit
                                </button>
                            </CardActions>
                        </Grid>
			        </Grid>
                </Grid>
		    </Card>

		    {/* <SlidingPanelComponent policy={policy} /> */}

            {/* {policyData.filter(policy => policy.name==={policyName}).map(policy => (
                    <SlidingPanelComponent {...policy} /> ))} */}
                   
            
	    </div>
		
        );
}

export default BehaviorBasedCard;