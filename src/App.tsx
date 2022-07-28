
import './App.scss';
import Cards from './components/Cards/Card-layout';
import Form from './components/Form/Form-layout';
import Header from './components/Header/Header-layout';
import Intro from './components/Intro/Intro-layout';
import { useEffect } from "react"
import getToken from './core/utils/getToken';

function App() {

  useEffect(() => {
    const lsDate = localStorage.getItem("date")
    
    if (lsDate) {
      const expDate =  new Date(lsDate).getTime()
      const nowDate = new Date().getTime()

      if(expDate < nowDate) {
        getToken()
      }

    } else {
      getToken()
    }

  }, [])

  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Intro />
        <Cards/>
        <Form/>
      </div>
    </div>
  );
}

export default App;
