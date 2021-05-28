import React from "react";
import { Link } from "react-router-dom";
export default function Request({ request }) {
    return(
        <div>
            Type : {request.careType}
            {console.log("id", request.id)}
            Name : {request.clientName}
           
<Link to={`./requests/${request.id}`}><button>More Information</button></Link>
        </div>
    )
}