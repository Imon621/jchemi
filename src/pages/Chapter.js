import {
  Grid,
  Typography,
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  IconButton,
} from "@material-ui/core";
import React from "react";

// adding icon
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const classes = makeStyles((theme) => ({
  cardRoot: {
    maxWidth: 345,
  },
}));

export default function Chapter(props) {
  // login data
  const [show, setShow] = React.useState(true);
  // test data
  const [dataModel, setDataModel] = React.useState({
    primary: {
      name: "1st paper",
      chapter: [
        {
          id: 1,
          no: 1,
          chapter: "1st chapter",
          name: "nomenclature",
          class_started: "14 nov 22",
          total: 17,
          running: false,
        },
        {
          id: 2,
          no: 2,
          chapter: "2nd chapter",
          name: "strichiometry",
          class_started: "14 nov 22",
          total: 17,
          running: true,
        },
        {
          id: 3,
          no: 3,
          chapter: "3rd chapter",
          name: "nomenclature",
          class_started: "14 nov 22",
          total: 17,
          running: false,
        },
        {
          id: 4,
          no: 4,
          chapter: "4th chapter",
          name: "strichiometry",
          class_started: "14 nov 22",
          total: 17,
          running: false,
        },
      ],
    },
    secondary: {
      name: "2nd paper",
      chapter: [
        {
          id: 5,
          no: 5,
          chapter: "1st chapter",
          name: "nomenclature",
          class_started: "14 nov 22",
          total: 17,
          running: true,
        },
        {
          id: 6,
          no: 6,
          chapter: "2nd chapter",
          name: "strichiometry",
          class_started: "14 nov 22",
          total: 17,
          running: false,
        },
        {
          id: 7,
          no: 7,
          chapter: "3rd chapter",
          name: "nomenclature",
          class_started: "14 nov 22",
          total: 17,
          running: false,
        },
        {
          id: 8,
          no: 8,
          chapter: "4th chapter",
          name: "strichiometry",
          class_started: "14 nov 22",
          total: 17,
          running: false,
        },
      ],
    },
  });
  // sort function
  const sorter = (arr) => {
    arr.sort((a, b) => {
      return a.no - b.no;
    });
    return arr;
  };
  // create function
  const create = () => {};
  // edit function
  const edit = (id) => {
    dataModel.primary.chapter.map((x) => {
      if (x.id === id) {
        alert(x.running);
      }
    });
    if (dataModel.secondary) {
      dataModel.secondary.chapter.map((x) => {
        if (x.id === id) {
          alert(x.running);
        }
      });
    }
  };
  // remove function
  const remove = (id) => {
    const temp = dataModel.primary.chapter.filter((x) => {
      return x.id !== id;
    });
    const data = dataModel;
    data.primary.chapter = temp;
    setDataModel({ ...data });
    console.log(dataModel);
    if (dataModel.secondary) {
      const sectemp = dataModel.secondary.chapter.filter((x) => {
        return x.id !== id;
      });
      const secdata = dataModel;
      secdata.secondary.chapter = sectemp;
      setDataModel({ ...secdata });
    }
  };
  const List = (props) => {
    return (
      <>
        <Typography variant="h4" gutterBottom>
          {props.data.name}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={0} md={1} />
          <Grid item container spacing={3} xs={12} md={10}>
            {sorter(props.data.chapter).map((x) => {
              return (
                <Grid item xs={10} md={4} lg={3} key={x.id}>
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
                          <br />
                          {show ? (
                            <>
                              <IconButton
                                onClick={() => {
                                  setShow(!show);
                                }}
                              >
                                <EditIcon color="secondary" />
                              </IconButton>
                              <IconButton
                                onClick={() => {
                                  remove(x.id);
                                }}
                              >
                                <DeleteIcon color="error" />
                              </IconButton>
                            </>
                          ) : (
                            ""
                          )}
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
  return (
    <>
      <List data={dataModel.primary} />
      {show ? (
        <CardActionArea>
          <Typography variant="h5" color="secondary" gutterBottom>
            <IconButton>
              <AddCircleIcon color="secondary" />
            </IconButton>
            Add class group
          </Typography>
        </CardActionArea>
      ) : (
        ""
      )}
      {dataModel.secondary ? (
        <>
          <List data={dataModel.secondary} />
          {show ? (
            <CardActionArea>
              <Typography variant="h5" color="secondary" gutterBottom>
                <IconButton>
                  <AddCircleIcon color="secondary" />
                </IconButton>
                Add class group
              </Typography>
            </CardActionArea>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
}
