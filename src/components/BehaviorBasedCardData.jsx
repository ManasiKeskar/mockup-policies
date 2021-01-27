import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import './BehaviorCardDataFormProperties.css';
// import { blueGrey, grey, red } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';
import { openPanel } from './../actions';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
// import PersonOutline from '@material-ui/icons/PersonOutline';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import ButtonBase from '@material-ui/core/ButtonBase';
import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import Avatar from '@material-ui/core/Avatar';
import SeverityList from './SeverityList';
import PolicyNameAndDescriptionHeader from './PolicyNameAndDescriptionHeader';

const styles = ((theme) => ({
  title: {
    margin: 0,
    padding: theme.spacing(2),
    top: theme.spacing(3),
    backgroundColor: 'grey',
  },
  // AppBarHeader: {
  //   backgroundColor: "grey",
  //   color: "black",
  //   boxShadow: "0px 0px 0px 0px",
  //   variant: "subtitle2",
  //   padding: '0px 0px 0px 0px',
  // },
  // title: {
  //   fontSize: "8",
  //   flexgrow: 1,
  // },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: 'black',
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.title} {...other}>
      <Typography variant="subtitle2">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 2,
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: '0',
      width: 'fit-content',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      variant: 'body2',
    },
  }));

export default function BehaviorBasedCardData({ policy}) {

    const classes = useStyles();

    console.log("policy details in BehaviorBasedCardData is = ", policy);
    
    const name = policy.name;
    const description = policy.description;
    const severity = policy.severity;

    console.log("In Behavior Based Card Data Policy Name = ", policy.name);
    console.log("In Behavior Based Card Data Policy Description = ", policy.description)

    const dispatch = useDispatch();

    const handleClose = () => {
      dispatch(openPanel());
    }

    const onSubmitData = () => {

    }
    
    return (
      <div>
        <div>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Configure Policy: {name}
          </DialogTitle>
        </div>
        <div>
          <DialogContent>
            <div className={classes.root}>
              <PolicyNameAndDescriptionHeader name={name} description={description} />
              <FormControl className={classes.formControl}>
                <InputLabel id="severity-label" variant="inherit">Severity</InputLabel>
                <SeverityList severity={severity}/>
              </FormControl>
              <Typography variant='body2'>Additional Criteria</Typography>
            </div>
          </DialogContent>
        </div>
        <div>
          <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Save
              </Button>
              <Button onClick={handleClose} color="primary">
                Trash
              </Button>
          </DialogActions>
        </div>
      </div>
    );
}


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }


/* className={classes.root} */
        /* <form className="form" onSubmit={onSubmitData}> */
          /* <AppBar position='sticky' className={classes.AppBarHeader} >
            {/* <header className="Form-header" variant='outlined'>
                Configure Policy : {name}
            </header>
            <div>
              <label>{name}</label>
            </div>
            <div>
              <form>
                <label>{description}</label>
                
              </form>
            </div> */
            /* <Toolbar>
              <Typography variant="subtitle2" className={classes.title}>
                Configure Policy: {name}
              </Typography>
              <Button color="inherit" position='right' onClick={handleClose}>X</Button>
            </Toolbar>
          </AppBar> */
        /* </form> */



















// Code for Modal Dialog

// function SimpleDialog(props) {
  
//   const { onClose, open } = props;

//   const handleClose = () => {
//     onClose();
//   };

//   return (
//     <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
//       <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
//       <div>
//         <p>Hello World</p>
//       </div>
//     </Dialog>
//   );
// }

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
// };

// export default function BehaviorBasedCardData(props) {
//   const data = props.open;
//   console.log("In Data", data);

//   //Panel Code
//   //const [openPanel, setOpenPanel] = useState(false);
  
//   // if (data === true){
//   //   setOpenPanel(true);
//   // }

//   console.log("set Open Panel ", data);

  
//      if (data === true) {
//        return(
//         <div>          
//            <SimplePanel open={data} close={false} />
//         </div>
//       );
//      } else {
//          return null;
//      }
// }





//const [openPanel, setOpenPanel] = useState(false);
  //console.log("Open Panel = ", openPanel);
  //const [open, setOpen] = React.useState(false);

  // function setPanelOpeningMode(event) {
  //     setOpenPanel(event.target.value);
  // }
  
  // const handleClickOpen = () => {
  //    setOpen(true);
  // // //   //open = true;
  // };

  // const handleClose = () => {
  //   setOpen(false);
  //   //open = false;
  // };

  // return (
    // <div>
    //   {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
    //     Open simple dialog
    //   </Button> */}
    //   <SimpleDialog  open={data} onClose={false} />
    // </div>



// import * as React from 'react';
// import SlidingPanel from 'react-sliding-side-panel';
// import './example.css';
// import 'react-sliding-side-panel/lib/index.css';

// const App = () => {
//   const [openPanel, setOpenPanel] = React.useState(false);
//   const [panelType, setPanelType] = React.useState('left');
//   const [panelSize, setPanelSize] = React.useState(30);
//   const [noBackdrop, setNoBackdrop] = React.useState(false);

//   return (
//     <div className="example-container">
//       <div className="form-container">
//         <h1>React Sliding Side Panel</h1>
//         <div className="input-container">
//           <label htmlFor="width_input">
//             width (in %)
//             <input
//               id="width_input"
//               name="width_input"
//               type="number"
//               value={panelSize}
//               onChange={({ target }) => setPanelSize(Number(target.value))}
//             />
//           </label>
//         </div>
//         <div className="input-container">
//           <label htmlFor="no_backdrop">
//             <input
//               name="no_backdrop"
//               id="no_backdrop"
//               type="checkbox"
//               checked={noBackdrop}
//               onChange={({ target }) => setNoBackdrop(target.checked)}
//             />
//             Hide backdrop
//           </label>
//         </div>
//         <div className="input-container">
//           <button
//             type="button"
//             onClick={() => {
//               setPanelType('left');
//               setOpenPanel(true);
//             }}
//           >
//             Left
//           </button>
//           <button
//             type="button"
//             onClick={() => {
//               setPanelType('right');
//               setOpenPanel(true);
//             }}
//           >
//             Right
//           </button>
//           <button
//             type="button"
//             onClick={() => {
//               setPanelType('top');
//               setOpenPanel(true);
//             }}
//           >
//             Top
//           </button>
//           <button
//             type="button"
//             onClick={() => {
//               setPanelType('bottom');
//               setOpenPanel(true);
//             }}
//           >
//             Bottom
//           </button>
//         </div>
//       </div>
//       <SlidingPanel
//         type={panelType}
//         isOpen={openPanel}
//         backdropClicked={() => setOpenPanel(false)}
//         size={panelSize}
//         panelClassName="additional-class"
//         noBackdrop={noBackdrop}
//       >
//         <div className="panel-container">
//           <div>My Panel Content</div>
//           <button type="button" className="close-button" onClick={() => setOpenPanel(false)}>
//             close
//           </button>
//         </div>
//       </SlidingPanel>
//     </div>
//   );
// };

// export default App;



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     margin: 'auto',
//     maxWidth: 500,
//   },
//   image: {
//     width: 128,
//     height: 128,
//   },
//   img: {
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
//   },
// }));

// export default function ComplexGrid() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <Grid container spacing={2}>
//           <Grid item>
//             <ButtonBase className={classes.image}>
//               <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
//             </ButtonBase>
//           </Grid>
//           <Grid item xs={12} sm container>
//             <Grid item xs container direction="column" spacing={2}>
//               <Grid item xs>
//                 <Typography gutterBottom variant="subtitle1">
//                   Standard license
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   Full resolution 1920x1080 • JPEG
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   ID: 1030114
//                 </Typography>
//               </Grid>
//               <Grid item>
//                 <Typography variant="body2" style={{ cursor: 'pointer' }}>
//                   Remove
//                 </Typography>
//               </Grid>
//             </Grid>
//             <Grid item>
//               <Typography variant="subtitle1">$19.00</Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   );
// }
