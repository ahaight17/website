import React, { FunctionComponent } from "react"
import "./page.css"

export const Error: FunctionComponent = () => {
    return (
        <div className="flex-container-column center fit-page">
            <p>this is not a page</p>
            <a href="/">go home</a>
        </div>
    )
}