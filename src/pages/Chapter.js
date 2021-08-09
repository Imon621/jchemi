import {
  Grid,
  Typography,
  makeStyles,
  Card,
  CardActionArea,
  CircularProgress,
  CardContent,
} from "@material-ui/core";
import React from "react";

import db from "../components/firebase";

import { useParams, Link, Redirect } from "react-router-dom";
// colors
import green from "@material-ui/core/colors/green";
import orange from "@material-ui/core/colors/orange";

import Error from "../components/Error";

const classes = makeStyles((theme) => ({
  cardRoot: {
    maxWidth: 345,
  },
}));

export default function Chapter(props) {
  // data model
  const dataModel = [
    {
      year: "primary",
      id: 1,
      no: 1,
      chapter: "1st chapter",
      name: "nomenclature",
      class_started: "14 nov 22",
      total: 17,
      running: false,
    },
    {
      year: "primary",
      id: 2,
      no: 2,
      chapter: "2nd chapter",
      name: "strichiometry",
      class_started: "14 nov 22",
      total: 17,
      running: true,
    },
    {
      year: "primary",
      id: 3,
      no: 3,
      chapter: "3rd chapter",
      name: "nomenclature",
      class_started: "14 nov 22",
      total: 17,
      running: false,
    },
    {
      year: "primary",
      id: 4,
      no: 4,
      chapter: "4th chapter",
      name: "strichiometry",
      class_started: "14 nov 22",
      total: 17,
      running: false,
    },
    {
      year: "secondary",
      id: 5,
      no: 5,
      chapter: "1st chapter",
      name: "nomenclature",
      class_started: "14 nov 22",
      total: 17,
      running: true,
    },
    {
      year: "secondary",
      id: 6,
      no: 6,
      chapter: "2nd chapter",
      name: "strichiometry",
      class_started: "14 nov 22",
      total: 17,
      running: false,
    },
    {
      year: "secondary",
      id: 7,
      no: 7,
      chapter: "3rd chapter",
      name: "nomenclature",
      class_started: "14 nov 22",
      total: 17,
      running: false,
    },
    {
      year: "secondary",
      id: 8,
      no: 8,
      chapter: "4th chapter",
      name: "strichiometry",
      class_started: "14 nov 22",
      total: 17,
      running: false,
    },
  ];

  // test data
  const [chapter, setChapter] = React.useState("");
  const [redirectId, setRedirectId] = React.useState(null);
  const [error, setError] = React.useState(false);

  // fetching data
  let { course } = useParams();
  // const [id, setId] = React.useState(useParams().id);
  const fetch = () => {
    setError(false);
    setChapter("");
    db.collection("courses")
      .doc(course)
      .collection("chapter")
      .get()
      .then((x) => {
        const arr = [];
        if (x.docs.length !== 0) {
          for (var doc of x.docs) {
            const obj = {
              year: doc.data().year,
              id: doc.id,
              no: doc.data().no,
              chapter: doc.data().chapter,
              class_started: doc.data().class_started,
              name: doc.data().name,
              total: doc.data().total,
              running: doc.data().running,
              tags: doc.data().tags,
            };
            arr.push(obj);
          }
          setChapter(arr);
          setError(false);
        } else {
          setError(true);
        }
      });
  };
  React.useEffect(() => {
    setChapter("");
    fetch();
  }, [useParams().course]);
  // year filtering data
  const filt = (year) => {
    const arr = [];
    chapter.map((x) => {
      if (x.year === year) {
        arr.push(x);
      }
    });
    return arr;
  };
  // sort function
  const sorter = (arr) => {
    arr.sort((a, b) => {
      return a.no - b.no;
    });
    return arr;
  };
  // List Function
  const List = (props) => {
    return (
      <>
        {props.data.length !== 0 ? (
          <>
            <Typography variant="h4" gutterBottom>
              {props.data[0].year === "primary" ? "1st Year" : "2nd Year"}
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={0} md={1} />
              <Grid item container spacing={3} xs={12} md={10}>
                {sorter(props.data).map((x) => {
                  return (
                    <Grid item xs={10} md={4} lg={3} key={x.id}>
                      <Card className={classes.cardRoot}>
                        <CardActionArea
                          onClick={() => {
                            setRedirectId(x.id);
                          }}
                        >
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
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
                              Status:{" "}
                              {x.running ? (
                                <Typography style={{ color: orange[500] }}>
                                  Running
                                </Typography>
                              ) : (
                                <Typography style={{ color: green[500] }}>
                                  Finished
                                </Typography>
                              )}
                              <br />
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  );
                })}
                {/* <Form id={formId} /> */}
              </Grid>
              <Grid item xs={0} md={1} />
            </Grid>
          </>
        ) : (
          ""
        )}
      </>
    );
  };
  return (
    <>
      {error ? (
        <>
          <Error fetch={fetch} />
        </>
      ) : (
        <div
          style={{
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            height: "93vh",
            padding: 15,
            overflow: "auto",
          }}
        >
          {chapter !== "" ? (
            <div>
              <List data={filt("primary")} />
              {filt("secondary").length !== 0 ? (
                <List data={filt("secondary")} />
              ) : (
                ""
              )}
              {redirectId !== null ? (
                <Redirect to={`/classes/${course}/${redirectId}`} />
              ) : (
                ""
              )}
            </div>
          ) : (
            <div
              style={{
                height: 70 + "vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress style={{}} />
            </div>
          )}
        </div>
      )}
    </>
  );
}
