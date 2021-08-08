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
// accordion
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { CircularProgress, Button } from "@material-ui/core";

import db from "../components/firebase";

import { useParams } from "react-router-dom";
import zIndex from "@material-ui/core/styles/zIndex";

// test data
const data = [
  {
    id: 1,
    type: "link",
    no: 1,
    name: "basic class",
    link: "http://www.test.com",
    date: "12 jun 21",
  },
  {
    id: 2,
    type: "link",
    no: 2,
    name: "2nos class",
    link: "http://www.test.com",
    date: "12 jun 21",
  },
  {
    id: 3,
    type: "link",
    no: 3,
    name: "basic class",
    link: "http://www.test.com",
    date: "12 jun 21",
  },
  {
    id: 4,
    type: "link",
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
const useStyles = makeStyles({
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

  // type filtering data
  const filt = (type) => {
    const arr = [];
    classes.map((x) => {
      if (x.type === type) {
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

  const fetch = () => {
    db.collection("courses")
      .doc(course)
      .collection("chapter")
      .doc(id)
      .collection("classes")
      .get()
      .then((x) => {
        const arr = [];
        for (var doc of x.docs) {
          const obj = {
            type: doc.data().type,
            id: doc.id,
            no: doc.data().no,
            date: doc.data().date,
            link: doc.data().link,
            name: doc.data().name,
          };
          arr.push(obj);
        }
        // x.docs.map((doc) => {
        //   const obj = {
        //     type: doc.data().type,
        //     id: doc.id,
        //     no: doc.data().no,
        //     date: doc.data().date,
        //     link: doc.data().link,
        //     name: doc.data().name,
        //   };
        //   arr.push(obj);
        // });
        setClasses(arr);
      });
  };

  React.useEffect(() => {
    fetch();
  }, []);
  const Tableable = ({ data }) => {
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
    );
  };
  const Accor = () => {
    return (
      <>
        <div style={{ width: "100%" }}>
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              e
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={{}}>Class Links</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Tableable data={filt("link")} />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={{}}>PDF Links</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {filt("pdf").length !== 0 ? (
                <Tableable data={filt("pdf")} />
              ) : (
                "Sorry, no pdf found."
              )}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={{}}>Exam Links</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {filt("exam").length !== 0 ? (
                <Tableable data={filt("exam")} />
              ) : (
                "Sorry, no exam link found."
              )}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography className={{}}>Massage</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {filt("msg").length !== 0 ? (
                <Tableable data={filt("msg")} />
              ) : (
                "Sorry, no pdf found."
              )}
            </AccordionDetails>
          </Accordion>
        </div>
      </>
    );
  };
  return (
    <>
      {classes !== "" ? (
        <>
          <Accor />
        </>
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
