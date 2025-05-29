import React, { FunctionComponent } from 'react'
import loading2 from '../../assets/loading2.gif'

export const Loading: FunctionComponent = () => {
    return(
        <div className="content-box center">
          <img src={loading2} className="img-default"/>
        </div>
    )
}