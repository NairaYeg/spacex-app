
import './App.css';
import { data } from './constants/rockets.js'
import { Card } from './components/Card/Card.jsx'
 
function App() {
  return (
    <div>
     {data.map(({company, country, flickr_images, wikipedia, id}) => <Card key={id} 
     company={company} 
     country={country} 
     flickr_images={flickr_images}
     wikipedia={wikipedia}
     />)}
    </div>
  );
}

export default App;
