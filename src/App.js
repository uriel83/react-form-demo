import UncontrolledComponents from "./components/Login-function/Uncontrolled-components";
import LoginControlled from "./components/Login-function/Login-controlled";
import ControlledClass from "./components/LoginClass/controlledClass";
import RegisterFormClass from "./components/LoginClass/RegisterFormClass"
import NewControlledClass from './components/NewLoginClass/NewControlledClass'
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="mt-4 " style={{float: 'left', marginLeft:40, color:'orange'}}>
       <h4>Register Form Class</h4>
       <RegisterFormClass />
      </div>  
     
      <div className="mt-4 " style={{float: 'left', marginLeft:40, color:'red'}}>
      <h4>Controlled Class</h4>
        <ControlledClass />
      </div>
      <div className="mt-4" style={{float: 'left', marginLeft:40, color:'green'}}>
      <h4>Login Controlled</h4>
        <LoginControlled />
      </div>
       <div className="mt-4" style={{float: 'left', marginLeft:40, color:'blue'}}>
      <h4>Uncontrolled Components</h4>
        <UncontrolledComponents />
      </div>
      <div className="mt-4" style={{float: 'left', marginLeft:40, color:'black'}}>
      <h4>New Controlled Class</h4>
        <NewControlledClass />
      </div>
      
    </div>
  );
}

export default App;
