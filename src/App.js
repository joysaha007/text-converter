import { useState } from 'react';
import './App.css'; // Correct path to App.css
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm1 from './components/TextForm1';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mood, setMood] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMood = () => {
    if (mood === 'light') {
      setMood('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mood has been enabled.", "success");
    } else {
      setMood('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mood has been enabled.", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="Nirsoft" mood={mood} toggleMood={toggleMood} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm1 showAlert={showAlert} heading="Enter the text to analyze" mood={mood} />
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route  exact path="/" element={<TextForm1 showAlert={showAlert} heading="Enter the text to analyze" mood={mood} />} />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
