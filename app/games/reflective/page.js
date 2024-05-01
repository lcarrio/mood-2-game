"use client"; 
import { useState} from 'react'; 
  
export default function Home() { 
  const [inputData, setInputData] = useState(''); 
  const [allData, setAllData] = useState([]); 
  const [showAllData, setShowAllData] = useState(false); // New state variable 
  
  const handleSaveData = async () => { 
    const response = await fetch('/api/saveData', { 
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json', 
      }, 
      body: JSON.stringify({ data: inputData }), 
    }); 
  
    if (response.ok) { 
      alert('Data saved successfully!'); 
      setInputData(''); 
    } else { 
      alert('Something went wrong!'); 
    } 
  }; 
  
  const fetchAllData = async () => { 
    const response = await fetch('/api/getAllData'); 
  
    if (response.ok) { 
      const data = await response.json(); 
      setAllData(data); 
      setShowAllData(true); 
    } else { 
      alert('Failed to fetch data!'); 
    } 
  }; 
  
  return ( 
    <div> 
      <input 
        type="text"
        value={inputData} 
        onChange={(e) => setInputData(e.target.value)} 
      /> 
      <button onClick={handleSaveData}>Save Data</button> 
      <button onClick={fetchAllData}>Get All Data</button> {/* Call fetchAllData on button click */} 
        
      {/* Conditionally render the div based on the state */} 
      {showAllData && ( 
        <div> 
          <h2>All Data</h2> 
          <ul> 
            {allData.map((item) => ( 
              <li key={item._id}>{item.data}</li> 
            ))} 
          </ul> 
        </div> 
      )} 
    </div> 
  ); 
}