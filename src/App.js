import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainBody from './components/MainBody';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <MainBody></MainBody>
        <Footer></Footer>
    </div>
  );
}

export default App;
