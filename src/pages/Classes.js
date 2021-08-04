import React from "react";

// import ing material component
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";

import { CircularProgress } from "@material-ui/core";

import db from "../components/firebase";

import { useParams } from "react-router-dom";

// test data
const data = [
  {
    id: 1,
    no: 1,
    name: "basic class",
    link: "http://www.test.com",
    date: "12 jun 21",
  },
  {
    id: 2,
    no: 2,
    name: "2nos class",
    link: "http://www.test.com",
    date: "12 jun 21",
  },
  {
    id: 3,
    no: 3,
    name: "basic class",
    link: "http://www.test.com",
    date: "12 jun 21",
  },
  {
    id: 4,
    no: 4,
    name: "2nos class",
    link: "http://www.test.com",
    date: "12 jun 21",
  },
];

const columns = [
  { id: "no", label: "No.", minWidth: 50 },
  { id: "name", label: "Topics", minWidth: 150 },
  { id: "date", label: "Date", minWidth: 60 },
  { id: "link", label: "Links", minWidth: 50 },
];

const styles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function Classes() {
  const [classes, setClasses] = React.useState("");
  let { course, id } = useParams();

  React.useEffect(() => {
    db.collection("courses")
      .doc(course)
      .collection("chapter")
      .doc(id)
      .collection("classes")
      .get()
      .then((x) => {
        const arr = [];
        x.docs.map((doc) => {
          const obj = {
            type: doc.data().type,
            id: doc.id,
            no: doc.data().no,
            date: doc.data().date,
            link: doc.data().link,
            name: doc.data().name,
          };
          arr.push(obj);
        });
        setClasses(arr);
      });
  }, []);
  return (
    <>
      {classes !== "" ? (
        <Paper className={styles.root}>
          <TableContainer className={styles.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align="center"
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {classes.map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.no}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align="center">
                            {/* {column.format && typeof value === "number"
                          ? column.format(value)
                          : value} */}
                            {column.id === "link" ? (
                              <a target="_blank" href={value}>
                                Class Link
                              </a>
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
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
    </>
  );
}
