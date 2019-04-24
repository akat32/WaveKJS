import React from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";
import { Box } from '../component'
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path = "/" component = { Box }/>
        </div>
      </Router>
    </div>
  );
}

export default App;
