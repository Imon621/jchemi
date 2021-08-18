import React from "react";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { sorter } from "./sorting";

export default function Tableable({ data, columns }) {
  return (
    <Paper style={{ width: "100%" }}>
      <TableContainer style={{ minHeight: 440 }}>
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
            {sorter(data).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.no}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align="center">
                        {/* {column.format && typeof value === "number"
                          ? column.format(value)
                          : value} */}
                        <>
                          {column.id === "link" ? (
                            <>
                              {value !== "" ? (
                                <a target="_blank" href={value}>
                                  Link
                                </a>
                              ) : (
                                ""
                              )}
                            </>
                          ) : (
                            <>{value.toString()}</>
                          )}
                        </>
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
