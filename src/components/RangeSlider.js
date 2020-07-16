import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 'auto',
    padding: '30px'
  },
});

export default function RangeSlider({handleChange}) {
  const classes = useStyles();
  const [range, setRange] = useState([1926, 2020]);

  const handleSlide = (event, newRange) => {
    setRange(newRange);
    handleChange(newRange)
  };

  return (
    <div className={classes.root}>
      <Slider
        value={range}
        onChange={handleSlide}
        valueLabelDisplay="on"
        min={1926}
        max={2020}
      />
      <Typography>
        Please use the slider to select timeframe
      </Typography>
    </div>
  );
}
