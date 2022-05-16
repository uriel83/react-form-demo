import UncontrolledComponents from "./components/Login-function/Uncontrolled-components";
import LoginControlled from "./components/Login-function/Login-controlled";
import ControlledClass from "./components/LoginClass/controlledClass";
// import RegisterFormClass from "./components/LoginClass/RegisterFormClass"
import NewControlledClass from './components/LoginFormStateClass/NewControlledClass'
import FormByRenderProps from './components/RenderPropsClass/FormByRenderProps'
import LoginCustomHooksFunction from "./components/LoginCustomHooksFunction/LoginCustomHooksFunction"
import LoginFormik from "./components/LoginFormik/LoginFormik"
import './App.css';

function App() {
  return (
    <div className="App">
     {/* <div className="mt-4 " style={{float: 'left', marginLeft:40, color:'orange'}}>
       <h4>Register Form Class</h4>
       <RegisterFormClass />
      </div>   */}
     <div className="mt-4" style={{float: 'left', marginLeft:40, color:'green'}}>
      <h5>Login Formik Function</h5>
        <LoginFormik />
      </div>
     <div className="mt-4" style={{float: 'left', marginLeft:40, color:'#8A2BE2'}}>
      <h5>Login Custom Hooks Function</h5>
        <LoginCustomHooksFunction />
      </div>
       <div className="mt-4" style={{float: 'left', marginLeft:40, color:'#D2691E'}}>
      <h5>Uncontrolled Function</h5>
        <UncontrolledComponents />
      </div>
      <div className="mt-4" style={{float: 'left', marginLeft:40, color:'#BDB76B'}}>
      <h5>Controlled Function</h5>
        <LoginControlled />
      </div>
      <div className="mt-4 " style={{float: 'left', marginLeft:40, color:'red'}}>
      <h5>Controlled Class</h5>
        <ControlledClass />
      </div>
      <div className="mt-4" style={{float: 'left', marginLeft:40, color:'#808080'}}>
      <h5>Form With State Class</h5>
        <NewControlledClass />
      </div>
      <div className="mt-4" style={{float: 'left', marginLeft:40, color:'green'}}>
      <h5>Form By Render Props</h5>
        <FormByRenderProps />
      </div>
    </div>
  );
}

export default App;
