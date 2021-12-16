import  './Card.modules.css';
import {string, arrayOf, number} from 'prop-types';

export function Card({company, country, flickr_images, wikipedia, key}) {

  return(<div className='wrapper'> 
            <h2>{company}</h2>
            <p>{country}</p>
            <img width='200px' src={flickr_images[0]}  alt='Rocket Imade'/>
            <span> <a href={wikipedia}>About</a> </span>
        </div>)
};

Card.propTypes = {
   company: number,
   country: string,
   flickr_images: arrayOf(string),
   wikipedia: string,
};