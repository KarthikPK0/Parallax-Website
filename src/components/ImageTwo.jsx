import { Parallax } from 'react-parallax';
import Satellite from '../images/satellite.jpeg'

const ImageTwo = () => (
    <Parallax className='image' bgImage={Satellite} strength={300}>
    <div className='content'>
           {/* <span className='img-txt'>a trip to space</span> */}
    </div>
    </Parallax>
);

export default ImageTwo