import React from "react";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { Box, Typography, Grid } from "@mui/material";

const useStyles = makeStyles({
  statBox: {
    width: "90%",
    margin: "16px",
    borderRadius: "5px",
  },
  center: {
    textAlign: "center",
  },
  playerStats: {
    padding: "0px 8px",
  },
});

const Stats = () => {
  const classes = useStyles();
  const stats = useSelector((state) => state.stats);

  // checks if stats have been selected
  const statsEmpty = () => {
    return !Object.keys(stats).length;
  };

  // Placeholder component shown before a player is selected
  const showPlaceholder = () => {
    return (
      <Typography className={classes.center} variant="h6">
        Pick a player to view their 2021 stats!
      </Typography>
    );
  };

  // creates the stat list to show in the UI
  const showStats = () => {
    return (
      <div className={classes.playerStats}>
        <Typography className={classes.center} variant="h4">
          {`${stats.playerName} 2021 Season`}
        </Typography>
        <Typography
          className={classes.center}
          variant="body1"
        >{`Games Played - ${stats.data.games_played}`}</Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6">Per Game Stats</Typography>
            <Typography variant="subtitle1">{`Points - ${stats.data.pts}`}</Typography>
            <Typography variant="subtitle1">{`Assists - ${stats.data.ast}`}</Typography>
            <Typography variant="subtitle1">{`Blocks - ${stats.data.blk}`}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Overall Stats</Typography>
            <Typography variant="subtitle1">{`FG Pct - ${Math.round(
              stats.data.fg_pct * 100
            )}%`}</Typography>
            <Typography variant="subtitle1">{`3-Point Pct - ${Math.round(
              stats.data.fg3_pct * 100
            )}%`}</Typography>
            <Typography variant="subtitle1">{`FT Pct - ${Math.round(
              stats.data.ft_pct * 100
            )}%`}</Typography>
          </Grid>
        </Grid>
      </div>
    );
  };

  return (
    <Box
      className={classes.statBox}
      sx={{
        backgroundColor: "#ede1d1",
      }}
    >
      {statsEmpty() ? showPlaceholder() : showStats()}
    </Box>
  );
};

export default Stats;
