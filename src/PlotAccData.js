import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Plotly from 'plotly.js-dist';

function PlotAccData({ date, slot }) {
  const [data, setData] = useState({
    time: [],
    a_x: [],
    a_y: [],
    a_z: [],
    kurtosis_x: 0,
    kurtosis_y: 0,
    kurtosis_z: 0,
    crest_factor_x: 0,
    crest_factor_y: 0,
    crest_factor_z: 0,
    a_rms_x: 0,
    a_rms_y: 0,
    a_rms_z: 0,
    f_mag: [],
    f_phase: [],
    indices: [],
    psd_f: [],
    psd_m: []
  });
  const plotContainer = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:8000/myapp/adata/', {
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
        y: data.a_x,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: '#007bff' },
        name: 'Acceleration-X'
      },
      {
        x: data.time,
        y: data.a_y,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: '#dc3545' },
        name: 'Acceleration-Y'
      },
      {
        x: data.time,
        y: data.a_z,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: '#28a745' },
        name: 'Acceleration-Z'
      }
    ];

    const layout = {
      title: 'Acceleration Data from Sensor',
      xaxis: { title: 'Time(s)' },
      yaxis: { title: 'Acceleration(mg)' },
      legend: { orientation: 'h', x: 0, y: 1.1 },
      margin: { t: 50, r: 50, b: 50, l: 50 },
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      font: {
        family: 'Arial, sans-serif',
        color: '#333'
      }
    };

    const config = { responsive: true };

    Plotly.newPlot(plotContainer.current, plotData, layout, config);

    return () => {
      Plotly.purge(plotContainer.current);
    };
  }, [data]);

  const freq_container_mag = useRef(null);

  useEffect(() => {
    const plotData = [
      {
        x: data.indices, // Array of indices
        y: data.f_mag,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: '#ffc107' }, // Choose your desired color
        name: 'Magnitude'
      }
    ];
  
    const layout = {
      title: 'Fourier Transform Magnitude',
      xaxis: { title: 'Index' },
      yaxis: { title: 'Magnitude' },
      legend: { orientation: 'h', x: 0, y: 1.1 },
      margin: { t: 50, r: 50, b: 50, l: 50 },
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      font: {
        family: 'Arial, sans-serif',
        color: '#333'
      }
    };
  
    const config = { responsive: true };
    Plotly.newPlot(freq_container_mag.current, plotData, layout, config);
  
    return () => {
      Plotly.purge(freq_container_mag.current);
    };
  }, [data.f_mag, data.indices]); // Include data.f_mag as dependency

  const freq_container_phase = useRef(null);
  
  useEffect(() => {
    const plotData = [
      {
        x: data.indices, // Array of indices
        y: data.f_phase,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: '#ff5722' }, // Choose your desired color
        name: 'Phase'
      }
    ];
  
    const layout = {
      title: 'Fourier Transform Phase',
      xaxis: { title: 'Index' },
      yaxis: { title: 'Phase(rad)' },
      legend: { orientation: 'h', x: 0, y: 1.1 },
      margin: { t: 50, r: 50, b: 50, l: 50 },
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      font: {
        family: 'Arial, sans-serif',
        color: '#333'
      }
    };

    const config = { responsive: true };
  
    Plotly.newPlot(freq_container_phase.current, plotData, layout, config);
  
    return () => {
      Plotly.purge(freq_container_phase.current);
    };
  }, [data.f_phase, data.indices]); // Include data.f_phase as dependency


  const psd_container = useRef(null);
  
  useEffect(() => {
    const plotData = [
      {
        x: data.psd_f, // Array of indices
        y: data.psd_m,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: '#ff5722' }, // Choose your desired color
        name: 'Phase'
      }
    ];
  
    const layout = {
      title: 'Power Spectral Density',
      xaxis: { title: 'Frequency' },
      yaxis: { title: 'Power' },
      legend: { orientation: 'h', x: 0, y: 1.1 },
      margin: { t: 50, r: 50, b: 50, l: 50 },
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      font: {
        family: 'Arial, sans-serif',
        color: '#333'
      }
    };

    const config = { responsive: true };
  
    Plotly.newPlot(psd_container.current, plotData, layout, config);
  
    return () => {
      Plotly.purge(psd_container.current);
    };
  }, [data.psd_f, data.psd_m]); // Include data.f_phase as dependency
  

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1000px', margin: 'auto', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <div ref={plotContainer} style={{ width: '100%', height: '400px', marginBottom: '20px' }} />
      <div ref={freq_container_mag} style={{ width: '100%', height: '400px', marginBottom: '20px' }} />
      <div ref={freq_container_phase} style={{ width: '100%', height: '400px', marginBottom: '20px' }} />
      <div ref={psd_container} style={{ width: '100%', height: '400px', marginBottom: '20px' }} />
      <div style={{ marginTop: '20px' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Other Parameters</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px' }}>
          {Object.keys(data).filter(key => key.startsWith('kurtosis') || key.startsWith('crest_factor') || key.startsWith('a_rms')).map((key, index) => (
            <div key={index} style={{ minWidth: '180px', border: '1px solid #e3e6e8', borderRadius: '8px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <h3 style={{ color: '#007bff', margin: 0 }}>{key.replace(/_/g, ' ').toUpperCase()}</h3>
              <p style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>{parseFloat(data[key]).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlotAccData;
