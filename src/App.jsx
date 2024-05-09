
import './App.css'
import ImageOne from './components/ImageOne'
import ImageTwo from './components/ImageTwo'
import ImageThree from './components/ImageThree'
import TextBox from './components/TextBox'
import TextBox2 from './components/TextBox2'
import TextBox3 from './components/TextBox3'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageSlider from './components/ImageSlider'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'







function App() {


  return (
    <div>

    <Header/>
    <ImageOne/>
    <TextBox/>
    <ImageTwo/>
    <TextBox2/>
    <ImageThree/>
    <TextBox3/>
    <ImageSlider/>
    <Footer/>
    </div>
  )
}

export default App
