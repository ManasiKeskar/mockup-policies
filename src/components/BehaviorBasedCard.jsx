import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red, yellow } from '@material-ui/core/colors';
import PersonOutline from '@material-ui/icons/PersonOutline';
import WarningIcon from '@material-ui/icons/Warning';
import Switch from '@material-ui/core/Switch';
import { WrapText } from '@material-ui/icons';
import BehaviorBasedCardData from './BehaviorBasedCardData';

const useStyles = makeStyles((theme) => ({
	root: {
	  maxWidth: 345,
	},
	header: {
		disableTypography: false,
		// variant: "h6",
		height: theme.typography.h6.fontSize,
		width: theme.typography.h6.fontSize
	},
	avatar: {
	  backgroundColor: red[500],
	  height: theme.spacing(3),
	  width: theme.spacing(3),
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

const BehaviorBasedCard = ({ policy }) => {
	console.log("Policy", policy);
	const name = policy.name;
	const description = policy.description;
	const severity = policy.severity;

	const classes = useStyles();
		
	const [state, setState] = useState({
		checkedA: true,
		checkedB: true,
	});

	const [showCardDetails, setShowCardDetails] = useState('true');

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked});
	};

	const onCardClicked = () => {
		
		console.log("In onCardClicked", showCardDetails, policy);
		setShowCardDetails({ showCardDetails: 'true'});
        
        console.log("In OnCardClicked after showCardData", showCardDetails);
		// <BehaviorBasedCardData  policy={policy} showCardDetails={showCardDetails}/>;
		return(
			<div>
				<BehaviorBasedCardData  policy={policy} showCardDetails={showCardDetails}/>;
			</div>
		);
		
    };

	const SeverityLabel = () => {
		if(severity === "High"){
			SeverityLabel = "H"
		} else if(severity === "Medium"){
			SeverityLabel = "M"
		} else {
			SeverityLabel = "L"
		}
	};
	
	return (
		<Card className={classes.root}>
			<CardActionArea onClick={onCardClicked}>
				<CardHeader className={classes.header}
					avatar={
						 <PersonOutline />
					}
					action={
						// <IconButton>
						<div className={classes.headerIcons}>
							<Avatar aria-label="severity" className={classes.avatar}>
								M
							</Avatar>
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
						// {/* </IconButton> */}
					}
          			title={name}
      			/>
				<CardContent>
					<div>
						<Typography variant="inherit" color="textSecondary" component="p">
							{description}
						</Typography>
					</div>
					<Divider></Divider>
					<div>
						<Typography variant="caption" color="textSecondary" component = "p">
							App
						</Typography>
						<Typography variant="caption" color="textSecondary" component = "p">
							Some
						</Typography>
					</div>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default BehaviorBasedCard;