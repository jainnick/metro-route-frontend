import React from 'react'

function Route(props) {
    const { path, InterchangeStations, line1, line2, lineEnds, time } = props.data;

  return (
      <div>
          <h2>Line1</h2>
          <ol>
        {line1.map((station, index) => (
        <li key={index}>{station}</li>
        ))}
          </ol>
          <h2>Line2</h2>
           <ol>
        {line2.map((station, index) => (
        <li key={index}>{station}</li>
        ))}
          </ol>
          <h2>LineEnds</h2>
            {lineEnds.map((station, index) => (
        <p key={index}>{station}</p>
            ))}
          <h2>Path</h2>
          <ol>
          {path.map((station, index) => (
            <li key={index}>{station}</li>
          ))}
          </ol>
           <h2>Interchange Stations:</h2>
        {InterchangeStations.map((station, index) => (
        <p key={index}>{station}</p>
        ))}
           <h2>Time:</h2>
      <p>{time}</p>
      
    </div>
  )
}

export default Route
