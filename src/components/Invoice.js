import axios from "axios";
import { useEffect, useState } from "react";
import InvoiceItem from "./InvoiceItem";
import LoadingBar from "react-top-loading-bar";

export default function Invoice() {
  const [progress, setProgress] = useState(100);
  const [invoices, setInvoices] = useState("");
  const url = "https://rscdev.taxadda.com/api/invoice/list";
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get(url)
      .then((resp) => {
        const allInvoices = resp.data.invoices;
        setInvoices(allInvoices);
      })
      .catch((err) => {
        console.error(`Error: ${err}`);
      });
  };
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <h2
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "35px" }}
      >
        Available Invoices
      </h2>
      <div className="container">
        <div className="row">
          <InvoiceItem invoices={invoices} />
        </div>
      </div>
    </>
  );
}
