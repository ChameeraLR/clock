import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
 
function App() {
  const [value, setValue] = useState(new Date());
 
  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );
 
    return () => {
      clearInterval(interval);
    }
  }, []);
 
  return (
    <div>
      <p>Current time:</p>
          <Clock size={200} value={value} />
    </div>
  )
}

export default App;
