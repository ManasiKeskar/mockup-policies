import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import BehaviorBasedCardData from './BehaviorBasedCardData';
// import SlidingPanel from 'react-sliding-side-panel';
// import 'react-sliding-side-panel/lib/index.css';
import { blueGrey } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';
import { openPanel } from './../actions';
import SlidingPanelComponent from './SlidingPanelComponent';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  hover: {
    "&:hover": {
      backgroundColor: blueGrey,
      cursor: 'pointer',
    },
  },
}));

export default function BehaviorBasedCardTabularFormat(props) {

    const policyData = props.policyData;
    console.log("In BehaviorBasedCardDataFormat-- policy data = ", policyData);
    
    const headers = [Object.keys(policyData[0])];
    console.log("headers are ", headers);

    const classes = useStyles();

    const dispatch = useDispatch();

    const [policyDetails, setPolicyDetails] = useState(policyData[0]);
    console.log("Initial Policy Deatils = ", policyDetails);

    const showCardDetails = (policy) => {
        setPolicyDetails(policy);
        dispatch(openPanel());
    }

    return (
        <div className={classes.root}>
            <TableContainer className={classes.paper}>
                <Table className={classes.table} size='small' aria-label="Policy table">
                    <TableHead>
                        <TableRow>
                            { headers[0].map((header, index) =>
                                <TableCell key={`headerRow-${index}`} align='right'>
                                    {header}
                                </TableCell> 
                            ) }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { policyData.map((policy, policyIndex) => 
                            <TableRow hover classes={{hover: classes.hover,}} key={`policyDataRow-${policyIndex}`} onClick={() => showCardDetails({policy})}>
                                {headers[0].map((header,headerIndex)=>
                                    <TableCell key={`policyCell-${headerIndex}`}>
                                        {policy[header]}
                                    </TableCell>
                                )}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <SlidingPanel
                type={panelType}
                isOpen={openPanel}
                backdropClicked={() => setOpenPanel(true)}
                size={panelSize}
                panelClassName="additional-class"
                noBackdrop={noBackdrop}
            >
                <div className="BehaviorCardDataPanel-container">
                    <div>My Panel Content
                        {console.log("policyDetails in sliding panel = ", policyDetails.policy)}
                    </div>
                    <BehaviorBasedCardData policy={policyDetails.policy} />
                    <div>{console.log("policyDetails after Card Call = ", policyDetails.policy)}</div>
                    <button type="button" className="close-button" onClick={() => setOpenPanel(false)}>
                        close
                    </button>
                </div>
            </SlidingPanel> */}
            <SlidingPanelComponent policy={policyDetails.policy} />
        </div>
    );
}