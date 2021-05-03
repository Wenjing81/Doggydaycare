import './App.css';
import React ,{ Component } from 'react';
import Welcome from './components/Welcome';
import LoadAllDogs from './components/LoadAllDogs';
import DetailsInfo from './components/DetailsInfo';
import { BrowserRouter as Router, Route ,Switch, useParams } from'react-router-dom';
import { Card } from './components/card/card.component';


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
            <Route path={"/DetailsInfo/:item"} component={DetailsInfo} />
          
          </Switch>
        </Router>   
        </main>
        </div>
      );
    }
   
 
export default App;





