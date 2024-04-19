import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Plotly from 'plotly.js-dist';

function PlotVelData({ date, slot }) {
  const [data, setData] = useState({
    time: [],
    v_x: [],
    v_y: [],
    v_z: [],
    v_rms_x: 0,
    v_rms_y: 0,
    v_rms_z: 0
  });
  const plotContainer = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:8000/myapp/vdata/', {
      params: {
        date: encodeURIComponent(date.toISOString()),
        slot: slot
      }
    })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [date, slot]);

  useEffect(() => {
    const plotData = [
      {
        x: data.time,
        y: data.v_x,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'blue' },
        name: 'Velocity-X'
      },
      {
        x: data.time,
        y: data.v_y,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'red' },
        name: 'Velocity-Y'
      },
      {
        x: data.time,
        y: data.v_z,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'green' },
        name: 'Velocity-Z'
      }
    ];

    const layout = {
      title: 'Velocity Data from Sensor',
      xaxis: { title: 'Time(s)' },
      yaxis: { title: 'Velocity(mgs)' },
      legend: { orientation: 'h', y: -0.2 },
      margin: { t: 40, r: 30, b: 80, l: 50 }
    };

    const config = { responsive: true };

    Plotly.newPlot(plotContainer.current, plotData, layout, config);

    return () => {
      Plotly.purge(plotContainer.current);
    };
  }, [data]);

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '900px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      color: '#333'
    }}>
      <div ref={plotContainer} style={{ width: '100%', height: '400px' }} />
      <div style={{ marginTop: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Velocity RMS Values</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <ParameterCard label="RMS Velocity-X" value={`${data.v_rms_x}`} color="#007bff" />
          <ParameterCard label="RMS Velocity-Y" value={`${data.v_rms_y}`} color="#dc3545" />
          <ParameterCard label="RMS Velocity-Z" value={`${data.v_rms_z}`} color="#28a745" />
        </div>
      </div>
    </div>
  );
}

const ParameterCard = ({ label, value, color }) => (
  <div style={{
    border: '1px solid #e3e6e8',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    textAlign: 'center'
  }}>
    <h3 style={{ color, margin: '0 0 10px' }}>{label}</h3>
    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{value}</p>
  </div>
);

export default PlotVelData;
