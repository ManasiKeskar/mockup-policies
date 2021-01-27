import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import PersonOutline from '@material-ui/icons/PersonOutline';

const useStyles = makeStyles(() => ({
    image: {
      width: 20,
      height: 20,
    },
}));

const PolicyNameAndDescriptionHeader =({name, description}) => {

    const classes = useStyles();

    console.log("In PolicyNameAndDescriptionHeader name = ", name);
    console.log("In PolicyNameAndDescriptionHeader description = ", description);

    return(
        <Grid container spacing={2}>
            <Grid item>
                <ButtonBase className={classes.image}>
                <PersonOutline />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                    {name}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                    {description}
                    </Typography>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default PolicyNameAndDescriptionHeader;