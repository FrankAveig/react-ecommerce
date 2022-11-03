import logo from './logo.svg';
import './App.css';
import Defaultpage from './pages/Defaultpage';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <NavigationBar img={true} login={true} class={true}/>
      <HomePage/>
      <Footer/>
    </>
  );
}

export default App;
