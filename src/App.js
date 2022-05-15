import UncontrolledComponents from "./components/Login-function/Uncontrolled-components";
import LoginControlled from "./components/Login-function/Login-controlled";
import ControlledClass from "./components/LoginClass/controlledClass";
// import RegisterFormClass from "./components/LoginClass/RegisterFormClass"
import NewControlledClass from './components/LoginFormStateClass/NewControlledClass'
import FormByRenderProps from './components/RenderPropsClass/FormByRenderProps'
import LoginCustomHooksFunction from "./components/LoginCustomHooksFunction/LoginCustomHooksFunction"
import './App.css';

function App() {
  return (
    <div className="App">
     {/* <div className="mt-4 " style={{float: 'left', marginLeft:40, color:'orange'}}>
       <h4>Register Form Class</h4>
       <RegisterFormClass />
      </div>   */}
     
     <div className="mt-4" style={{float: 'left', marginLeft:40, color:'green'}}>
      <h4>Login Custom Hooks Function</h4>
        <LoginCustomHooksFunction />
      </div>
      <div className="mt-4" style={{float: 'left', marginLeft:40, color:'green'}}>
      <h4>Controlled Function</h4>
        <LoginControlled />
      </div>
       <div className="mt-4" style={{float: 'left', marginLeft:40, color:'blue'}}>
      <h4>Uncontrolled Function</h4>
        <UncontrolledComponents />
      </div>
      <div className="mt-4 " style={{float: 'left', marginLeft:40, color:'red'}}>
      <h4>Controlled Class</h4>
        <ControlledClass />
      </div>
      <div className="mt-4" style={{float: 'left', marginLeft:40, color:'black'}}>
      <h4>Form With State Class</h4>
        <NewControlledClass />
      </div>
      <div className="mt-4" style={{float: 'left', marginLeft:40, color:'green'}}>
      <h4>Form By Render Props</h4>
        <FormByRenderProps />
      </div>
    </div>
  );
}

export default App;
