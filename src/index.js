import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





import {
  BrowswerRouter as Router,
  Routes,
  Route,
  Link
} from "reat-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/direccionUrl" element={componente}/>
      </Routes>
    </Router>
  )
}
 const NotFound = () => {
   return (
     <div>
       <h1>Pagina no encontrada</h1>
     </div>
   )
 }
 export default NotFound;