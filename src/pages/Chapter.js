import {
  Grid,
  Typography,
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button
} from "@material-ui/core";
import React from "react";

const dataModel = {
  primary: {
    name: "1st paper",
    chapter: [
      {
        chapter: "1st chapter",
        name: "nomenclature",
        class_started: "14 nov 22",
        total: 17,
        running: false
      },
      {
        chapter: "2nd chapter",
        name: "strichiometry",
        class_started: "14 nov 22",
        total: 17,
        running: true
      },
      {
        chapter: "3rd chapter",
        name: "nomenclature",
        class_started: "14 nov 22",
        total: 17,
        running: false
      },
      {
        chapter: "4th chapter",
        name: "strichiometry",
        class_started: "14 nov 22",
        total: 17,
        running: false
      }
    ]
  },
  Secondary: {
    name: "2nd paper",
    chapter: [
      {
        chapter: "1st chapter",
        name: "nomenclature",
        class_started: "14 nov 22",
        total: 17,
        running: true
      },
      {
        chapter: "2nd chapter",
        name: "strichiometry",
        class_started: "14 nov 22",
        total: 17,
        running: false
      },
      {
        chapter: "3rd chapter",
        name: "nomenclature",
        class_started: "14 nov 22",
        total: 17,
        running: false
      },
      {
        chapter: "4th chapter",
        name: "strichiometry",
        class_started: "14 nov 22",
        total: 17,
        running: false
      }
    ],
    class_started: "24 feb 23"
  }
};

const classes = makeStyles((theme) => ({
  cardRoot: {
    maxWidth: 345
  }
}));

const List = (props) => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        {props.data.name}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={0} md={1} />
        <Grid item container spacing={3} xs={12} md={10}>
          {props.data.chapter.map((x) => {
            return (
              <Grid item xs={10} md={3}>
                <Card className={classes.cardRoot}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {x.chapter + " - " + x.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Class Started: {x.class_started}
                        <br />
                        Total Class: {x.total}
                        <br />
                        Status: {x.running ? "Running" : "Finished"}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={0} md={1} />
      </Grid>
    </>
  );
};

export default function Chapter(props) {
  return (
    <>
      <List data={dataModel.primary} />
      <List data={dataModel.Secondary} />
    </>
  );
}
