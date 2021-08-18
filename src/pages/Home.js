import { Typography, Button } from "@material-ui/core";
import React from "react";

import { CircularProgress } from "@material-ui/core";
import db from "../components/firebase";
import Error from "../components/Error";
import { Redirect } from "react-router-dom";

export default function Home({ src, setSrc }) {
  const [data, setData] = React.useState("");
  const [error, setError] = React.useState(false);
  const [redirectId, setRedirectId] = React.useState(null);

  const fetch = () => {
    setError(false);
    setData("");
    db.collection("app")
      .doc("data")
      .get()
      .then((x) => {
        setData(x.data());
        if (x.data() === {}) {
          setError(true);
        } else {
          if (data.image !== "") {
            console.log(data.image);
          }
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

  const Hm = () => {
    return (
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          height: "93vh",
          color: "white",
        }}
      >
        <div
          style={{
            height: 70 + "vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h3"
            style={{ fontFamily: "'Style Script', cursive" }}
          >
            Jewel Chemistry
          </Typography>
          <Typography variant="h5">View ongoing courses:</Typography>

          {data === "" ? (
            <div style={{}}>
              <CircularProgress style={{}} />
            </div>
          ) : (
            <>
              {data.running.map((x) => {
                return (
                  <>
                    <Button
                      onClick={() => {
                        setRedirectId(x.link);
                      }}
                    >
                      <Typography variant="body1" gutterBottom>
                        {x.name}
                      </Typography>
                    </Button>
                  </>
                );
              })}
            </>
          )}
          {redirectId !== null ? (
            <Redirect to={`/classes/master/${redirectId}`} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  };
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        height: "93vh",
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
            <Hm />
          </>
        )}
      </>
    </div>
  );
}
