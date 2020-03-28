import React from 'react';


const CasesView = (props) =>{
    return (
        
        <div>
            <h1>{props.country}</h1>
        <table class="table table-borderless table-dark">
            <tbody>
                <tr>
                <th scope="col">Confirmed</th>
                <td>:</td>
                <td>{props.confirmed}</td>
                </tr>
                <tr>
                <th scope="col">Deaths</th>
                <td>:</td>
                <td>{props.deaths}</td>
                
                </tr>
                <tr>
                <th scope="col">Recovered</th>
                <td>:</td>
                <td>{props.recovered}</td>
                
                </tr>
            </tbody>
        </table>
        <p>Last update : {props.date}</p>
        </div>
    )
}

export default CasesView;