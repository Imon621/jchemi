import React from "react";
import Tableable from "../components/Table";
import { CircularProgress } from "@material-ui/core";
import db from "../components/firebase";
import Error from "../components/Error";

export default function Routin() {
  const [data, setData] = React.useState("");
  const [error, setError] = React.useState(false);

  const columns = [
    { id: "no", label: "No.", minWidth: 50 },
    { id: "name", label: "Topics", minWidth: 150 },
    { id: "date", label: "Date", minWidth: 60 },
    { id: "link", label: "Links", minWidth: 50 },
  ];

  const fetch = () => {
    setError(false);
    setData("");
    db.collection("courses")
      .doc("routine")
      .collection("routine")
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
        setData(arr);
        if (x.docs.length === 0) {
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
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        height: "93vh",
        padding: 15,
        overflow: "auto",
      }}
    >
      <>
        {error ? (
          <>
            <Error fetch={fetch} />
          </>
        ) : (
          <>
            {data !== "" ? (
              <>
                <Tableable data={data} columns={columns} />
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
    </div>
  );
}
