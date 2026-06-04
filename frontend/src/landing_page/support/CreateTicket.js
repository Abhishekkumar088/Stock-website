import react, { useState } from "react";

function CreateTicket() {
  let [query, setQuery] = useState("");

  let handleNameChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="m-4 bg-body-tertiary " style={{paddingBottom:"50px"}}>
      <div className="support">
        <div className="d-flex justify-content-lg-between">
          <h1 className="fw-bold" style={{color:"#424242"}}>Support Portal</h1>
          <a href="#">
            <button className="btn btn-primary">MyTickets</button>
          </a>
        </div>
       </div> 
       
        <div className="querySection mt-3 input-group shadow-sm">
          <span className="input-group-text" id="addon-wrapping">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            placeholder="Eg: How do I open my acoount, How do I activate F&O.."
            type="text"
            className="query form-control"
            value={query}
            onChange={handleNameChange}
          />
        </div>
      
    </div>
  );
}

export default CreateTicket;
