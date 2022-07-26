
import './App.scss';
import Cards from './components/Cards/Card-layout';
import Form from './components/Form/Form-layout';
import Header from './components/Header/Header-layout';
import Intro from './components/Intro/Intro-layout';

function App() {
  return (
    <div className="container">

      <Header />

      <div className="wrapper">
        <Intro />
        <Cards />
        <Form/>
      </div>
    </div>
  );
}

export default App;
