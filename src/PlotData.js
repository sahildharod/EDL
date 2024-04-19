import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Plotly from 'plotly.js-dist';

function PlotWithData() {
  const [data, setData] = useState({ x: [], y: [] });
  const plotContainer = useRef(null);

  useEffect(() => {
    // Fetch data from Django backend
    axios.get('http://localhost:8000/myapp/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Plot the fetched data using Plotly.js
    const plotData = [{
      x: data.x, // Assuming the fetched data has 'x' and 'y' properties
      y: data.y,
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'blue' },
    }];

    const layout = {
      title: 'Data from Django Backend',
      xaxis: { title: 'X-axis' },
      yaxis: { title: 'Y-axis' },
    };

    const config = { responsive: true };

    Plotly.newPlot(plotContainer.current, plotData, layout, config);

    // Cleanup function to remove the plot when component unmounts
    return () => {
      Plotly.purge(plotContainer.current);
    };
  }, [data]); // Re-plot when 'data' changes

  return (
    <div>
      <div ref={plotContainer} style={{ width: '100%', height: '400px' }} />
    </div>
  );
}

export default PlotWithData;
