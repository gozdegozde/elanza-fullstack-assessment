import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
export default function Request({ request }) {
     
    return(
        <div style = {{border: "solid 1px gray", padding: "3%"}}>
            Type : {request.careType} <br/>
            
            Name : {request.clientName} <br/>
            Date : {moment(request.startDate).format("DD-MM-YYYY")} <br/>
           
<Link to={`./requests/${request.id}`}><button>More Information</button></Link>
        </div>
    )
}