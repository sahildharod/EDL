// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';

// function PlotTempData({ date, slot }) {
//   const [data, setData] = useState({
//     temp: 0,
//     humidity: 0
//   });
//   const plotContainer = useRef(null);

//   useEffect(() => {
//     // Fetch data from Django backend
//     axios.get('http://localhost:8000/myapp/edata/', {
//       params: {
//         date: encodeURIComponent(date.toISOString()), // Encode date to ISO string format
//         slot: slot
//       }
//     })
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });

//   }, [date, slot]);
//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif' }}>
//       <div ref={plotContainer} style={{ width: '100%', height: '400px' }} />
//       <div style={{ marginTop: '20px' }}>
//         <h2>Environmental Parameters</h2>
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
//           <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
//             <h3 style={{ color: 'blue' }}>Temperature</h3>
//             <p>{data.temp}</p>
//           </div>
//           <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
//             <h3 style={{ color: 'red' }}>Humidity</h3>
//             <p>{data.humidity}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PlotTempData;



import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function PlotTempData({ date, slot }) {
  const [data, setData] = useState({
    temp: 0,
    humidity: 0
  });

  useEffect(() => {
    axios.get('http://localhost:8000/myapp/edata/', {
      params: {
        date: encodeURIComponent(date.toISOString()),
        slot: slot,
      }
    })
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [date, slot]);

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      color: '#333'
    }}>
      <h2 style={{ textAlign: 'center', margin: '0 0 20px' }}>Environmental Parameters</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          minWidth: '200px',
          border: '1px solid #e3e6e8',
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: '#fff',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#007bff', margin: '0 0 10px' }}>Temperature</h3>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{data.temp}°C</p>
        </div>
        <div style={{
          minWidth: '200px',
          border: '1px solid #e3e6e8',
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: '#fff',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#dc3545', margin: '0 0 10px' }}>Humidity</h3>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{data.humidity}%</p>
        </div>
      </div>
    </div>
  );
}

export default PlotTempData;
