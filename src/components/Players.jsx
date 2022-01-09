import React from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Grid } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import { fetchStats } from "../redux/actions";
import Stats from "./Stats";

const useStyles = makeStyles({
  title: {
    color: "white",
    textAlign: "center",
    padding: "8px",
  },
  playerList: {
    height: "800px",
    overflowY: "scroll",
  },
  playerItem: {
    margin: "16px",
    minHeight: "40px",
    "&:hover": {
      cursor: "pointer",
    },
    borderRadius: "5px",
  },
  playerContent: {
    minHeight: "40px",
    padding: "0px 8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  placeholder: {
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderTitle: {
    color: "white",
  },
  stats: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Players = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const teamPlayers = useSelector((state) => state.teamPlayers);

  // Create the list of elements to hold all the Team names
  const showTeamPlayers = () => {
    return teamPlayers.map((p) => {
      const position = p.position ? p.position : "-";
      const playerTitle = `${p.first_name} ${p.last_name}: ${position}`;
      return (
        <Box
          key={p.id}
          className={classes.playerItem}
          onClick={() => getStats(p.id, `${p.first_name} ${p.last_name}`)}
          sx={{
            backgroundColor: "#ede1d1",
            "&:hover": {
              backgroundColor: "#c8af93",
            },
          }}
        >
          <div className={classes.playerContent}>
            <Typography variant="h6">{playerTitle}</Typography>
            <ArrowForwardIos />
          </div>
        </Box>
      );
    });
  };

  // A Player has been clicked, show stats
  const getStats = (id, playerName) => {
    dispatch(fetchStats(id, playerName));
  };

  // Give user loading feedback while data is gathered
  const showPlaceholder = () => {
    if (!teamPlayers.length) {
      return (
        <div className={classes.placeholder}>
          <Typography variant="h4" className={classes.placeholderTitle}>
            Pick your favorite team!
          </Typography>
        </div>
      );
    }
  };

  return !teamPlayers.length ? (
    showPlaceholder()
  ) : (
    <Grid container>
      <Grid className={classes.playerList} item xs={6}>
        {showTeamPlayers()}
      </Grid>
      <Grid className={classes.stats} item xs={6}>
        <Stats />
      </Grid>
    </Grid>
  );
};

export default Players;
