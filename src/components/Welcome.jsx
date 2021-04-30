import {Link} from 'react-router-dom';

const Welcome = ({ nextScreen }) => (
   



<div className="App">
     <section>
        
        <h2>Welcome to our Doggy Daycare!</h2>
        
        <Link to = "/LoadAllDogs">
             <button onClick= "">Check our cute dogs!</button>
        </Link>
        
    </section>
</div>
);

export default Welcome;