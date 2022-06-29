import Email from "./Email";

export default function InvoiceItem(props) {
  const displayInvoices = (props) => {
    const { invoices } = props;
    if (invoices.length > 0) {
      return invoices.slice(0, 14).map((element) => {
        return (
          <div className="col-md-4" key={element._id}>
            <div className="card my-3 mx-5">
              <div className="card-body">
                <div
                  style={{
                    display: "flex",
                    marginBottom: "0.2rem",
                    marginTop: "-0.6rem",
                  }}
                >
                  <span className="badge rounded-pill bg-danger">
                    {element.status}
                  </span>
                </div>
                <h5 className="card-title">
                  {!element.lineItem[0].productName
                    ? element.productName
                    : element.lineItem[0].productName}
                </h5>
                <h6>
                  Bill To -{" "}
                  {element.name.charAt(0).toUpperCase() + element.name.slice(1)}
                </h6>
                <h6>Due Date - {element.dueDate.slice(0, 10)}</h6>
                <h6>Bill Date - {element.billDate.slice(0, 10)}</h6>
                <div className="card my-4" style={{ width: "18rem" }}>
                  <div className="card-header">
                    <h4>Bill Details</h4>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Quantity - {element.lineItem[0].quantity}
                    </li>
                    <li className="list-group-item">
                      Gross Amount - ₹{element.grossAmount}
                    </li>
                    <li className="list-group-item">
                      GST Amount - ₹{element.gstAmount}
                    </li>
                    <li className="list-group-item">
                      Net Amount - ₹{element.netAmount}
                    </li>
                  </ul>
                </div>
                <div className="card my-1" style={{ width: "18rem" }}>
                  <div className="card-header">
                    <h5>Notes</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      {element.notes.charAt(0).toUpperCase() +
                        element.notes.slice(1)}
                    </li>
                  </ul>
                </div>
                <Email InvoiceItem = {element}/>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  return <>{displayInvoices(props)}</>;
}
