import logo from './logo.svg';
import './App.css';
import Defaultpage from './pages/Defaultpage';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import { Footer } from './components/Footer';
import LoginPage from './pages/LoginPage';
import SingInPage from './pages/SingInPage';
import RouterComponent from './routes';

function App() {
  return (
    <>
      <NavigationBar img={true} login={true} class={true}/>
      <RouterComponent/>
      <Footer/>
    </>
  );
}

export default App;
