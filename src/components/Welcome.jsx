import {Link} from 'react-router-dom';
import BackgroundPic from '../images/backgroundpic.jpg';
const Welcome = ({ nextScreen }) => (
   



<div className="App">
     <section>
        
        <h2>Welcome to our Doggy Daycare!</h2>
        
        <Link to = "/LoadAllDogs">
             <button onClick= "">Check our CUTE dogs!</button>
        </Link>
        <img src= {BackgroundPic} 
        style={{width:'80%', height:'100%', margin:"30px"}}
        />
    </section>
</div>
);

export default Welcome;