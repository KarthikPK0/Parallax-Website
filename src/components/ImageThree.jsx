import { Parallax } from 'react-parallax';
import Space from '../images/galaxy2.avif'

const ImageThree = () => (
    <Parallax className='image' bgImage={Space} strength={300}>
    <div className='content'>
           {/* <span className='img-txt'>a trip to space</span> */}
    </div>
    </Parallax>
);

export default ImageThree