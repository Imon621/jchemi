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

import {} from "@material-ui/core";

const data = {
  classes: [
    {
      no: 1,
      name: "basic class",
      link: "www.test.com",
      linkText: "click me",
      date: "12 jun 21",
    },
    {
      no: 2,
      name: "2nos class",
      link: "www.test.com",
      linkText: "click me",
      date: "12 jun 21",
    },
    {
      no: 3,
      name: "basic class",
      link: "www.test.com",
      linkText: "click me",
      date: "12 jun 21",
    },
    {
      no: 4,
      name: "2nos class",
      link: "www.test.com",
      linkText: "click me",
      date: "12 jun 21",
    },
  ],
};

const columns = [
  { id: "no", label: "No.", minWidth: 50 },
  { id: "name", label: "Topics", minWidth: 150 },
  { id: "date", label: "Date", minWidth: 60 },
  { id: "link", label: "Links", minWidth: 50 },
];

const classes = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function Classes() {
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.classes.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.no}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
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
  );
}
