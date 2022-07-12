import './App.css';
import { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sum } from './sum'
import { Main } from './main';
import { Diff } from './diff';
import { Mul } from './mul';
import { Div } from './div';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }


  render() {
    return (

      <div>

        <Router>
          <Routes>
            <Route path='/main' element={<Main />} />
            <Route path='/sum' element={<Sum />} />
            <Route path='/diff' element={<Diff />} />
            <Route path='/mul' element={<Mul />} />
            <Route path='/div' element={<Div />} />


          </Routes>
        </Router>
      </div>
    );
  }

}

export default App;