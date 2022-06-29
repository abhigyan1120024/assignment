import axios from "axios";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";

export default function AddInvoice() {
  const [progress, setProgress] = useState(100);
  const url = "https://rscdev.taxadda.com/api/invoice/add";
  var today = new Date();
  const [amount, setAmount] = useState(0);
  const [invoice, setInvoice] = useState({
    name: "",
    dueDate: today,
    grossAmount: 0,
    billNo: 1,
    billDate: today,
    status: "due",
    productName: "",
    gstAmount: 0,
    netAmount: amount,
    notes: "",
    quantity: 0,
  });
  const onChange = (e) => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
    setAmount(parseInt(invoice.grossAmount) + parseInt(invoice.gstAmount));
    setInvoice((invoice) => ({
      ...invoice,
      netAmount: amount,
    }));
  };
  const submitInvoice = () => {
    axios
      .post(url, invoice)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
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
        Add an Invoice
      </h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name of Customer
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">
            Due Date
          </label>
          <input
            type="date"
            className="form-control"
            id="dueDate"
            name="dueDate"
            max="2023-12-31"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Bill Status
          </label>
          <div className="form-check form-check-inline mx-3">
            <input
              className="form-check-input"
              type="radio"
              name="status"
              id="due"
              value="due"
              onChange={onChange}
            />
            <label className="form-check-label" htmlFor="status">
              Due
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="status"
              id="paid"
              value="paid"
              onChange={onChange}
            />
            <label className="form-check-label" htmlFor="status">
              Paid
            </label>
          </div>
        </div>
        <h3>Bill Details</h3>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            name="productName"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Quantity" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="grossAmount" className="form-label">
            Gross Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="grossAmount"
            name="grossAmount"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lineItem" className="form-label">
            GST Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="gstAmount"
            name="gstAmount"
            onChange={onChange}
            required
          />
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a note here"
            id="notes"
            name="notes"
            onChange={onChange}
            style={{ height: "100px" }}
          ></textarea>
          <label htmlFor="notes">Notes</label>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={submitInvoice}
          style={{ margin: "35px 0px", marginTop: "35px" }}
        >
          Submit
        </button>
      </form>
    </>
  );
}
