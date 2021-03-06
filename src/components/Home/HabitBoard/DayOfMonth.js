import React from 'react';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';

import Pixel from './Pixel';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
    color: theme.status.blue,
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 22,
    padding: '5px 35px 5px 30px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const DayOfMonth = ({ monthSelected, setMonthSelected }) => {
  const date = new Date();
  const days = new Date(date.getFullYear(), monthSelected + 1, 0).getDate();
  const daysArr = Array(days)
    .fill()
    .map((_, i) => i + 1);
  let today = 0;
  if (monthSelected === date.getMonth()) {
    today = date.getDate();
  }

  return (
    <>
      <Typography variant="h5" className={'month'}>
        <MonthSelector
          monthSelected={monthSelected}
          setMonthSelected={setMonthSelected}
        />{' '}
        &nbsp; {date.getFullYear()}
      </Typography>
      <br />
      <div className="habitList">
        <div className="spaceAlign" />
        {daysArr.map((day, index) => {
          return (
            <Pixel
              key={index}
              day={day}
              today={today}
              background="white"
              onClick={() => {}}
            />
          );
        })}
      </div>
    </>
  );
};

const MonthSelector = ({ monthSelected, setMonthSelected }) => {
  const monthMap = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };

  const handleChange = (e) => {
    setMonthSelected(parseInt(e.target.value));
  };

  return (
    <FormControl>
      <Select
        value={monthSelected}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        {Object.keys(monthMap).map((monthItemValue) => (
          <MenuItem key={monthItemValue} value={monthItemValue}>
            {monthMap[monthItemValue]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DayOfMonth;
