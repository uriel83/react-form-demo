import UncontrolledComponents from "./components/Login-function/Uncontrolled-components";
import LoginControlled from "./components/Login-function/Login-controlled";
import ControlledClass from "./components/LoginClass/controlledClass";
import RegisterFormClass from "./components/LoginClass/RegisterFormClass"
import './App.css';

function App() {
  return (
    <div className="App mt-8">
     <div style={{float: 'left', marginLeft:40, color:'orange'}}>
       <h4>Controlled Class</h4>
       <ControlledClass />
      </div>  
     
      <div style={{float: 'left', marginLeft:40, color:'red'}}>
      <h4>Register Form Class</h4>
        <RegisterFormClass />
      </div>
      <div style={{float: 'left', marginLeft:40, color:'green'}}>
      <h4>Login Controlled</h4>
        <LoginControlled />
      </div>
       <div style={{float: 'left', marginLeft:40, color:'blue'}}>
      <h4>Uncontrolled Components</h4>
        <UncontrolledComponents />
      </div>
    </div>
  );
}

export default App;
