import React from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";
import { Main } from '../component'
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path = "/" component = { Main }/>
        </div>
      </Router>
    </div>
  );
}

export default App;
