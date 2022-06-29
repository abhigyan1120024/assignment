import emailjs from "emailjs-com";
import { useState } from "react";

export default function Email(props) {
  const [email, setEmail] = useState("");
  const { InvoiceItem } = props;
  // console.log(InvoiceItem);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Send Email was clicked");
    const template = {
      to_email: e.target.getAttribute("email"),
      product_name: e.target.getAttribute("productname"),
      to_name: e.target.getAttribute("toname"),
      quantity: e.target.getAttribute("quantity"),
      gross_amount: e.target.getAttribute("grossamount"),
      gst_rate: e.target.getAttribute("gstrate"),
      gst_amount: e.target.getAttribute("gstamount"),
      net_amount: e.target.getAttribute("netamount"),
    };
    emailjs
      .send(
        "service_fkj8ndo",
        "template_yiub1pn",
        template,
        "VNlJsd1HZsAyXgRxk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Email Invoice
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Email Invoice
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div id="emailHelp" className="form-text">
                  You will receive the invoice on the specified email ID
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={sendEmail}
                email={email}
                toname={
                  InvoiceItem.name.charAt(0).toUpperCase() +
                  InvoiceItem.name.slice(1)
                }
                productname={InvoiceItem.lineItem[0].productName}
                quantity={InvoiceItem.lineItem[0].quantity}
                grossamount={InvoiceItem.grossAmount}
                gstrate={InvoiceItem.lineItem[0].gstRate}
                gstamount={InvoiceItem.gstAmount}
                netamount={InvoiceItem.netAmount}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
