import React from 'react'
import {IoIosClose} from 'react-icons/io'
import './index.scss'

const ShowErrors = ({ Errors=[], onClearError=f=>f }) =>
    <div className="show-errors">
        {(Errors.length) ?
            Errors.map((message, i) =>
                <div key={i} className="error">
                    <p>{message}</p>
                    <IoIosClose onClick={() => onClearError(i)}/>
                </div>
            ) : null
        }
    </div>

export default ShowErrors