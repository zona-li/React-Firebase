import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

import { withFirebase } from '../Firebase';

const useStyles = makeStyles(theme => ({
    root: {
        margin: 100
    },
}));

const MembershipSubscriptionBase = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h3">Join the class of 2020</Typography>
            <Typography variant="subtitle1">Start the journey to become a more disciplined, healthier, wealthier, and happier version of you</Typography>
            <br />
            <Button variant="contained">
                Become a member
            </Button>
        </div>
    );
}

const MembershipSubscription = withFirebase(MembershipSubscriptionBase)
export default MembershipSubscription;