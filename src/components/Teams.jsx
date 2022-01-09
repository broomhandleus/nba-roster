import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNbaPlayers,
  fetchNbaTeams,
  setCurrentPlayerList,
  resetStats,
} from "../redux/actions";
import { CircularProgress, Grid, Box, Typography } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import Players from "./Players";

const useStyles = makeStyles({
  page: {
    overflow: "hidden",
  },
  title: {
    color: "white",
    textAlign: "center",
    padding: "8px",
  },
  teamItem: {
    margin: "16px",
    height: "75px",
    "&:hover": {
      cursor: "pointer",
    },
    borderRadius: "5px",
  },
  teamContent: {
    height: "75px",
    padding: "0px 8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  loading: {
    height: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  dial: {
    marginBottom: "16px",
  },
  loadingText: {
    color: "white",
  },
  gridItemTeams: {
    height: "800px",
    overflowY: "auto",
  },
});

const Teams = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.nbaTeams);
  const players = useSelector((state) => state.nbaPlayers);

  useEffect(() => {
    dispatch(fetchNbaTeams());
    dispatch(fetchNbaPlayers());
  }, [dispatch]);

  // Create the list of elements to hold all the Team names
  const showTeams = () => {
    return teams.map((t) => {
      return (
        <Box
          key={t.full_name}
          className={classes.teamItem}
          onClick={() => teamClicked(t.id)}
          sx={{
            backgroundColor: "#ede1d1",
            "&:hover": {
              backgroundColor: "#c8af93",
            },
          }}
        >
          <div className={classes.teamContent}>
            <Typography variant="h4">{t.full_name}</Typography>
            <ArrowForwardIos />
          </div>
        </Box>
      );
    });
  };

  // A team has been clicked, either clear the shown players, or update the list
  const teamClicked = (teamId) => {
    const newPlayers = players.filter((p) => {
      return p.team.id === teamId;
    });
    dispatch(resetStats());
    dispatch(setCurrentPlayerList(newPlayers.reverse()));
  };

  // Give user loading feedback while data is gathered
  const showLoading = () => {
    if (!teams.length || !players.length) {
      return (
        <div className={classes.loading}>
          <CircularProgress size={150} className={classes.dial} />
          <Typography variant="h6" className={classes.loadingText}>
            Loading NBA Team Info
          </Typography>
        </div>
      );
    }
  };

  // Show Information once it all has been retrieved
  const showGrid = () => {
    if (teams.length && players.length) {
      return (
        <Grid container spacing={2}>
          <Grid className={classes.gridItemTeams} item xs={6}>
            {showTeams()}
          </Grid>
          <Grid item xs={6}>
            <Players />
          </Grid>
        </Grid>
      );
    }
  };

  return (
    <div className={classes.page}>
      <Typography className={classes.title} variant="h2" gutterBottom>
        NBA Team Rosters
      </Typography>
      {showLoading()}
      {showGrid()}
    </div>
  );
};

export default Teams;
