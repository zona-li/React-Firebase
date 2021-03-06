import React, { useState, useEffect } from 'react';
import ConfettiGenerator from 'confetti-js';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import HabitList from './HabitBoard/HabitList';
import DayOfMonth from './HabitBoard/DayOfMonth';

const useStyles = makeStyles((theme) => ({
  noHabit: {
    marginLeft: theme.spacing(1),
  },
}));

const confettiSettings = { target: 'confetti-page', clock: '90' };

const TheBoard = ({ allHabits, dispatch }) => {
  const { firstLoaded, habits } = allHabits;
  const habitsNames = Object.keys(habits);
  // Whether the user has any habit stored in the DB.
  const [hasHabit, setHasHabit] = useState(false);
  const date = new Date();
  const [monthSelected, setMonthSelected] = useState(date.getMonth());

  useEffect(() => {
    if (habitsNames.length) {
      setHasHabit(true);
    } else {
      setHasHabit(false);
    }
  }, [habitsNames]);

  const makeConfetti = () => {
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
      confetti.clear();
    }, 3000);
  };

  if (!hasHabit && firstLoaded) return <NoHabits />;
  return (
    <div>
      <DayOfMonth
        monthSelected={monthSelected}
        setMonthSelected={setMonthSelected}
      />
      <HabitList
        habits={habits}
        monthSelected={monthSelected}
        dispatch={dispatch}
        makeConfetti={makeConfetti}
      />
    </div>
  );
};

const NoHabits = () => {
  const classes = useStyles();
  return (
    <Typography variant="subtitle1" className={classes.noHabit}>
      There is no habit to show. Start by adding a new habit.
    </Typography>
  );
};

export default TheBoard;
