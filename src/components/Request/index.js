import React from "react";
export default function Request({ request }) {
    return(
        <div>
            Type : {request.careType}
            Name : {request.clientName}
            Start Date : {request.startDate}
            End Date " {request.endDate}"

        </div>
    )
}