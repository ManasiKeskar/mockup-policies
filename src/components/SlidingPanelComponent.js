import React from 'react';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
import { useSelector, useDispatch } from 'react-redux';
import { openPanel } from './../actions';
// import InputLabel from '@material-ui/core/InputLabel';
import BehaviorBasedCardData from './BehaviorBasedCardData';
import './BehaviorCardDataFormProperties.css';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: 30,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    position : 'fixed',
    top : 0,
    right : 0,
    border: '2px #000',
    height: '100%',
    width : '40%',
    boxShadow: theme.shadows[2],
    padding: theme.spacing(0, 0, 0),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const SlidingPanelComponent = ({policy}) => {

  console.log("In Sliding Panel component");
  const classes = useStyles();
  console.log("policy clicked = ", policy);

  const modalOpen = useSelector(state => state.openPanel);
  console.log("modalOpen state = ", modalOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(openPanel());
  }

  return (
    <div className={classes.root}>
      <Dialog 
        open={modalOpen} 
        onClose={handleClose} 
        TransitionComponent={Transition} 
        aria-labelledby="form-dialog-title"
      >
        <div className={classes.paper}>
        
            <BehaviorBasedCardData policy={policy} />
        
        </div>
      </Dialog>
    </div>
  );
}

export default SlidingPanelComponent;







// wrapper: {
  //   width: 40 + theme.spacing(2),
  //   height: '100%'
  // },
  // modal: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
/* <div className={classes.wrapper}> */
        /* <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={modalOpen}
            onClose={handleClose}
            closeAfterTransition
            // BackdropComponent={Backdrop}
            // BackdropProps={{
            //     timeout: 500,
            // }}
        >
            <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <div className={classes.paper}>
                    <div>
                      <BehaviorBasedCardData policy={policy} />
                    </div>
                    <form className="form">
                      <p>My Panel contents</p>
                      <button onClick={handleClose}>CLOSE</button>
                    </form>
                </div>
            </Slide>
        </Modal> */
        /* <Slide direction="left" in={true} mountOnEnter unmountOnExit> */

        /* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle> */
            /* <DialogContent> */
              /* <DialogContentText> */


              /* </DialogContent> */
            /* <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Subscribe
              </Button>
            </DialogActions> */
        