import './App.css';
import React from 'react';
import Welcome from './components/Welcome';
import LoadAllDogs from './components/LoadAllDogs';
import { BrowserRouter as Router, Route ,Switch} from'react-router-dom'


function App(){
    
      return(
        <div className ="App">
          <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <Welcome/>
            </Route>
            <Route path="/LoadAllDogs">
              <LoadAllDogs/>
            </Route>
            <Route path="/DetailsInfo">
              <LoadAllDogs/>
            </Route>
          
          </Switch>
        </Router>   
        </main>
        </div>
      );
    }
   
 
export default App;




