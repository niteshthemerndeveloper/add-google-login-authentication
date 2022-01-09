import './App.css';
import Login from './components/google-auth/Login.js';
import Logout from './components/google-auth/Logout.js';

const clientId = process.env.REACT_APP_CLIENT_ID;

function App() {
  // console.log(clientId);

  return (
    <div className='App'>
      <h1>How to Add Google Login to Your React App!</h1>
      <Login clientId={clientId} />
      <div style={{ margin: '20px' }}></div>
      <Logout clientId={clientId} />
    </div>
  );
}

export default App;
