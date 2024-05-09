import { Parallax } from 'react-parallax';
import Astronaut from '../images/aunotes2.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Astronaut} strength={300}>
    <div id='home' className='content'>
           <span className='img-txt'>a trip to space</span>
    </div>
    </Parallax>
);

export default ImageOne