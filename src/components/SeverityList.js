import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import SeverityLabel from './SeverityLabel';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

const SeverityList = ({severity}) => {
    const [severityValue, setSeverity] = React.useState(severity);

    const handleChange = (event) => {
        setSeverity(event.target.value);
    };

    return (
        <Select
            labelId="severity-label"
            id="severity"
            value={severityValue}
            onChange={handleChange}
            minWidth='100px'
        >
            <MenuItem value='high'>
                <Grid container spacing={2}>
                    <Grid item>
                        <SeverityLabel severity="high" />
                    </Grid>
                    <Grid item variant='body2'>High</Grid>
                </Grid>
            </MenuItem>
            <MenuItem value='medium'>
                <Grid container spacing={2}>
                    <Grid item>
                        <SeverityLabel severity="medium" />
                    </Grid>
                    <Grid item>Medium</Grid>
                </Grid>
            </MenuItem>
            <MenuItem value='low'>
                <Grid container spacing={2}>
                    <Grid item>
                        <SeverityLabel severity="low" />
                    </Grid>
                    <Grid item>Low</Grid>
                </Grid>
            </MenuItem>
        </Select>
    );
};

export default SeverityList;