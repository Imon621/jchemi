import { Grid, Typography, makeStyles } from "@material-ui/core";
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
        running: false,
      },
      {
        chapter: "2nd chapter",
        name: "strichiometry",
        class_started: "14 nov 22",
        total: 17,
        running: false,
      },
      {
        chapter: "3rd chapter",
        name: "nomenclature",
        class_started: "14 nov 22",
        total: 17,
        running: false,
      },
      {
        chapter: "4th chapter",
        name: "strichiometry",
        class_started: "14 nov 22",
        total: 17,
        running: false,
      },
    ],
  },
  Secondary: {
    name: "2nd paper",
    chapter: [
      {
        chapter: "1st chapter",
        name: "nomenclature",
        class_started: "14 nov 22",
        total: 17,
        running: false,
      },
      {
        chapter: "2nd chapter",
        name: "strichiometry",
        class_started: "14 nov 22",
        total: 17,
        running: false,
      },
      {
        chapter: "3rd chapter",
        name: "nomenclature",
        class_started: "14 nov 22",
        total: 17,
        running: false,
      },
      {
        chapter: "4th chapter",
        name: "strichiometry",
        class_started: "14 nov 22",
        total: 17,
        running: false,
      },
    ],
    class_started: "24 feb 23",
  },
};

const classes = makeStyles((theme) => ({
  cardRoot: {
    maxWidth: 345,
  },
}));

const List = (props) => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        {props.data.name}
      </Typography>
      <Grid container spacing={4}>
        <Grid item sm={12}>
          <p>hello world</p>
        </Grid>
      </Grid>
    </>
  );
};

export default function Chapter(props) {
  return <List data={dataModel.primary} />;
}
