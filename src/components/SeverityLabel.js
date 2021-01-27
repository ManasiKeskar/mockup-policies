import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	avatar: {
	  backgroundColor: red[500],
	  height: theme.spacing(3),
	  width: theme.spacing(3),
	},
}));

const SeverityLabel = ({severity}) => {

    const classes = useStyles();

    console.log("In SeverityLabel severity = ", severity.toUpperCase());
    if(severity.toUpperCase() === "HIGH"){
        return (
            <Avatar aria-label="severity" className={classes.avatar}>
                H
            </Avatar>
        );
    } else if(severity.toUpperCase() === "MEDIUM"){
        return (
            <Avatar aria-label="severity" className={classes.avatar}>
                M
            </Avatar>
        );
    } else {
        return (
            <Avatar aria-label="severity" className={classes.avatar}>
                L
            </Avatar>
        );
    };
};
    
export default SeverityLabel;