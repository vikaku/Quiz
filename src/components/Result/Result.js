import React from 'react'
import ApiData from '../../apiData/ApiData';
import './Result.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

const Result =  (props) =>{

    return (
     <div className = 'result'>
            <h1 className ='display-4'>result:{props.result}/{ApiData.length}</h1>
     </div>

    )

    
}

export default Result;