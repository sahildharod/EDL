// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import PlotAccData from './PlotAccData';
// import PlotVelData from './PlotVelData';
// import PlotTempData from './PlotTempData';
// import backgroundImage from './wel_image.jpeg';

// function App() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedSlot, setSelectedSlot] = useState('');

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleSlotChange = (event) => {
//     setSelectedSlot(event.target.value);
//   };
  

//   return (
//     <div style={{
//       fontFamily: 'Arial, sans-serif',
//       maxWidth: '800px',
//       margin: '0 auto',
//       textAlign: 'center',
//       padding: '20px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       borderRadius: '10px',
//       backgroundImage: `url(${backgroundImage})`, // Add this line
//       backgroundColor: '#fff'
//     }}>
//       <h1 style={{ color: '#333' }}>Vibration Data Viewer</h1>
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
//         <div>
//           <label style={{ marginRight: '10px' }}>Select Date:</label>
//           <DatePicker
//             selected={selectedDate}
//             onChange={handleDateChange}
//             dateFormat="MM/dd/yyyy"
//             wrapperClassName="datePicker"
//           />
//         </div>
//         <div>
//   <label style={{ marginRight: '10px' }}>Select Location:</label>
//   <select
//     style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid #ccc', width: '200px' }}
//   >
//     <option value="">Select Location</option>
//     <option value="Location 1">H12/13 Bridge</option>
//     <option value="Location 2">Lake-Side Bridge</option>
//     <option value="Location 3">Power Lab Motor</option>
//     {/* Add more options as needed */}
//   </select>
// </div>
//         <div>
//   <label style={{ marginRight: '10px' }}>Enter Slot:</label>
//   <input
//     type="text"
//     value={selectedSlot}
//     onChange={handleSlotChange}
//     placeholder="Enter Slot Number"
//     style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid #ccc', width: '200px' }}
//   />
// </div>
//       </div>
//       <PlotAccData date={selectedDate} slot={selectedSlot} />
//       <PlotVelData date={selectedDate} slot={selectedSlot} />
//       <PlotTempData date={selectedDate} slot={selectedSlot} />
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import PlotAccData from './PlotAccData';
// import PlotVelData from './PlotVelData';
// import PlotTempData from './PlotTempData';
// import backgroundImage from './wel_image.jpeg';

// function App() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedSlot, setSelectedSlot] = useState('');

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleSlotChange = (event) => {
//     setSelectedSlot(event.target.value);
//   };
  
//   return (
//     <div>
//       <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }} />
//       <div style={{ 
//         fontFamily: 'Arial, sans-serif',
//         maxWidth: '800px',
//         margin: '0 auto',
//         textAlign: 'center',
//         padding: '20px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         borderRadius: '10px',
//         backgroundColor: '#fff',
//         position: 'relative', // Add this line
//         zIndex: '1' // Add this line to ensure content appears above the background image
//       }}>
//         <h1 style={{ color: '#333' }}>Vibration Data Viewer</h1>
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
//           <div>
//             <label style={{ marginRight: '10px' }}>Select Date:</label>
//             <DatePicker
//               selected={selectedDate}
//               onChange={handleDateChange}
//               dateFormat="MM/dd/yyyy"
//               wrapperClassName="datePicker"
//             />
//           </div>
//           <div>
//             <label style={{ marginRight: '10px' }}>Select Location:</label>
//             <select
//               style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid #ccc', width: '200px' }}
//             >
//               <option value="">Select Location</option>
//               <option value="Location 1">H12/13 Bridge</option>
//               <option value="Location 2">Lake-Side Bridge</option>
//               <option value="Location 3">Power Lab Motor</option>
//               {/* Add more options as needed */}
//             </select>
//           </div>
//           <div>
//             <label style={{ marginRight: '10px' }}>Enter Slot:</label>
//             <input
//               type="text"
//               value={selectedSlot}
//               onChange={handleSlotChange}
//               placeholder="Enter Slot Number"
//               style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid #ccc', width: '200px' }}
//             />
//           </div>
//         </div>
//         <PlotAccData date={selectedDate} slot={selectedSlot} />
//         <PlotVelData date={selectedDate} slot={selectedSlot} />
//         <PlotTempData date={selectedDate} slot={selectedSlot} />
//       </div>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import PlotAccData from './PlotAccData';
// import PlotVelData from './PlotVelData';
// import PlotTempData from './PlotTempData';
// import backgroundImage from './back.jpg';

// function App() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedSlot, setSelectedSlot] = useState('');

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleSlotChange = (event) => {
//     setSelectedSlot(event.target.value);
//   };
  
//   return (
//     <div style={{ position: 'relative' }}>
//       <div
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: 'cover',
//           zIndex: '-1' // Set z-index to be lower than the main content
//         }}
//       />
//       <div style={{ 
//         fontFamily: 'Arial, sans-serif',
//         maxWidth: '800px',
//         margin: '0 auto',
//         textAlign: 'center',
//         padding: '20px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         borderRadius: '10px',
//         backgroundColor: '#fff'
//       }}>
//         <h1 style={{ color: '#333' }}>Vibration Data Viewer</h1>
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
//           <div>
//             <label style={{ marginRight: '10px' }}>Select Date:</label>
//             <DatePicker
//               selected={selectedDate}
//               onChange={handleDateChange}
//               dateFormat="MM/dd/yyyy"
//               wrapperClassName="datePicker"
//             />
//           </div>
//           <div>
//             <label style={{ marginRight: '10px' }}>Select Location:</label>
//             <select
//               style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid #ccc', width: '200px' }}
//             >
//               <option value="">Select Location</option>
//               <option value="Location 1">H12/13 Bridge</option>
//               <option value="Location 2">Lake-Side Bridge</option>
//               <option value="Location 3">Power Lab Motor</option>
//               {/* Add more options as needed */}
//             </select>
//           </div>
//           <div>
//             <label style={{ marginRight: '10px' }}>Enter Slot:</label>
//             <input
//               type="text"
//               value={selectedSlot}
//               onChange={handleSlotChange}
//               placeholder="Enter Slot Number"
//               style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid #ccc', width: '200px' }}
//             />
//           </div>
//         </div>
//         <PlotAccData date={selectedDate} slot={selectedSlot} />
//         <PlotVelData date={selectedDate} slot={selectedSlot} />
//         <PlotTempData date={selectedDate} slot={selectedSlot} />
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PlotAccData from './PlotAccData';
import PlotVelData from './PlotVelData';
import PlotTempData from './PlotTempData';
import backgroundImage from './back.jpg';
import axios from 'axios';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    axios.get('http://localhost:8000/myapp/sdata/', {
      params: {
        date: encodeURIComponent(date.toISOString())
      }
    })
    .then(response => {
      alert('Total slots are: '+response.data['slots']);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  };

  const handleSlotChange = (event) => {
    setSelectedSlot(event.target.value);
  };
  
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'repeat',
          zIndex: '-1'
        }}
      />
      <div style={{ 
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        backgroundColor: '#fff'
      }}>
        <div style={{ border: '2px solid #333', padding: '10px', borderRadius: '8px', marginBottom: '20px' }}>
          <h1 style={{ color: '#333', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>Vibration Data Visualizer</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ marginRight: '10px' }}>Select Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              wrapperClassName="datePicker"
            />
          </div>
          <div>
            <label style={{ marginRight: '10px' }}>Select Location:</label>
            <select
              style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid #ccc', width: '200px' }}
            >
              <option value="">Select Location</option>
              <option value="400070">400070</option>
              <option value="400074">400074</option>
              <option value="400071">400071</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <label style={{ marginRight: '10px' }}>Enter Slot:</label>
            <input
              type="text"
              value={selectedSlot}
              onChange={handleSlotChange}
              placeholder="Enter Slot Number"
              style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid #ccc', width: '200px' }}
            />
          </div>
        </div>
        <PlotAccData date={selectedDate} slot={selectedSlot} />
        <PlotVelData date={selectedDate} slot={selectedSlot} />
        <PlotTempData date={selectedDate} slot={selectedSlot}/>
      </div>
    </div>
  );
}

export default App;
