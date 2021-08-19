import React from "react";

// import ing material component

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

import Error from "../components/Error";
import { filt, sorter } from "../components/sorting";
import Tableable from "../components/Table";
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
  const [error, setError] = React.useState(false);

  const fetch = () => {
    setError(false);
    setClasses("");
    db.collection("courses")
      .doc(course)
      .collection("chapter")
      .doc(id)
      .get()
      .then((x) => {
        const arr = x.data().classes !== undefined ? x.data().classes : [];
        setClasses(arr);
        if (arr.length === 0) {
          setError(true);
        } else {
          setError(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  React.useEffect(() => {
    fetch();
  }, []);

  const Accor = () => {
    return (
      <>
        <div
          style={{
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            height: "93vh",
            padding: 15,
            overflow: "auto",
          }}
        >
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
              <Tableable data={filt("link", classes)} columns={columns} />
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
              {filt("pdf", classes).length !== 0 ? (
                <Tableable data={filt("pdf", classes)} columns={columns} />
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
              {filt("exam", classes).length !== 0 ? (
                <Tableable data={filt("exam", classes)} columns={columns} />
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
              {filt("msg", classes).length !== 0 ? (
                <Tableable data={filt("msg", classes)} columns={columns} />
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
      {error ? (
        <>
          <Error fetch={fetch} />
        </>
      ) : (
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
      )}
    </>
  );
}
