import { useRef, useState } from 'react'
import './index.css'
import screenshot from "html2canvas"
function App(){

  const[tcolor,setColor]=useState('000');
  const[bcolor,setbColor]=useState('000');
  const [alignment, setAlignment] = useState('left');
  const image=useRef()

  const textColor=(colorName)=>{
    image.current.style.color=colorName
  }

  const bgColor=(colorName)=>{
    image.current.style.backgroundImage = 'none'; 
    image.current.style.backgroundColor=colorName
  }

  const fontFamily = (fontName) =>{
    image.current.style.fontFamily=fontName
  }

  const setBackgroundImage = (imgUrl) => {
    image.current.style.backgroundImage = `url(${imgUrl})`;
    image.current.style.backgroundSize = 'cover';
    image.current.style.backgroundPosition = 'center';
  }


  const downloadImage = () =>{
    screenshot(image.current).then(canvas => {
      const imageData = canvas.toDataURL("image/png")
      const link = document.createElement('a')
      link.href=imageData
      link.download="colorfontpeacker.png"
      link.click()
  });
  }


  return(
    <>
    <div className="main">
    <h1>COLOR AND FONT PICKER</h1>
    </div>
    <div className="parent">
      <div id="subc1">
        <h1 ref={image} contentEditable="true" className="content"  style={{ textAlign: alignment }}>write memorable things here...</h1>
        <button id="btn"  onClick={downloadImage}>Download</button>
      </div>

    <div className="child2">
    <h1>Choose Background Color</h1>
      <div id="subc3">
        <button id="red" onClick={()=>{bgColor('red')}}></button>
        <button id="black" onClick={()=>{bgColor('black')}}></button>
        <button id="grey" onClick={()=>{bgColor('gray')}}></button>
        <button id="darkred" onClick={()=>{bgColor('darkred')}}></button>
        <button id="orange" onClick={()=>{bgColor('orange')}}></button>
        <button id="green" onClick={()=>{bgColor('green')}}></button>
        <button id="yellow" onClick={()=>{bgColor('yellow')}}></button>
        <button id="brown" onClick={()=>{bgColor('brown')}}></button>
        <button id="beige" onClick={()=>{bgColor('beige')}}></button>
        <button id="blue" onClick={()=>{bgColor('blue')}}></button>
        <button id="purple" onClick={()=>{bgColor('purple')}}></button>
        <button id="cyan" onClick={()=>{bgColor('cyan')}}></button> 
        <button id="teal" onClick={()=>{bgColor('teal')}}></button>
        <button id="silver" onClick={()=>{bgColor('silver')}}></button>
        <button id="gold" onClick={()=>{bgColor('gold')}}></button>
        <button id="pink" onClick={()=>{bgColor('pink')}}></button>   
        <input 
        type='color'
        value={bcolor}
        onChange={(event)=>{
          setbColor(event.target.value)
          bgColor(event.target.value)
        }
      }
      />  
      </div>

      <h1>Choose Text Color</h1>
      <div id="subc4">
      <button id="red" onClick={()=>{textColor('red')}}></button>
        <button id="black" onClick={()=>{textColor('black')}}></button>
        <button id="grey" onClick={()=>{textColor('gray')}}></button>
        <button id="darkred" onClick={()=>{textColor('darkred')}}></button>
        <button id="orange" onClick={()=>{textColor('orange')}}></button>
        <button id="green" onClick={()=>{textColor('green')}}></button>
        <button id="yellow" onClick={()=>{textColor('yellow')}}></button>
        <button id="brown" onClick={()=>{textColor('brown')}}></button>
        <button id="beige" onClick={()=>{textColor('beige')}}></button>
        <button id="blue" onClick={()=>{textColor('blue')}}></button>
        <button id="purple" onClick={()=>{textColor('purple')}}></button>
        <button id="cyan" onClick={()=>{textColor('cyan')}}></button> 
        <button id="teal" onClick={()=>{textColor('teal')}}></button>
        <button id="silver" onClick={()=>{textColor('silver')}}></button>
        <button id="gold" onClick={()=>{textColor('gold')}}></button>
        <button id="pink" onClick={()=>{textColor('pink')}}></button>   
        <input 
        type='color'
        value={tcolor}
        onChange={(event)=>{
          setColor(event.target.value)
          textColor(event.target.value)
        }
      }
      />
      </div>

      <div>
      <h1>Choose Font Faimily</h1>
      <div id="font">
      <h1 id='times-new' onClick={()=>{fontFamily('Times New Roman')}}>A</h1>
      <h1 id='cursive' onClick={()=>{fontFamily('cursive')}}>A</h1>
      <h1 id='verdana' onClick={()=>{fontFamily('Algerian')}}>A</h1>
      <h1 id='arial'  onClick={()=>{fontFamily('arial')}}>A</h1>
      <h1 id='impact' onClick={()=>{fontFamily('Impact')}}>A</h1>
      </div>
      </div>

      <h1> Add Background Image</h1>
    <div id="image">
    <img 
    src='bulb.jpeg' 
    crossOrigin="anonymous" 
    id='imgage' 
    onClick={() => setBackgroundImage('./bulb.jpeg')} 
    />

    <img 
    src='vite.svg' 
    crossOrigin="anonymous" 
    id='imgage' 
    onClick={() => setBackgroundImage('vite.svg')} 
    /> 

    </div>

    <h1>Choose Alignment</h1>
  <div id="alignment">
  <button  onClick={() => setAlignment('left')}>Left</button>
  <button  onClick={() => setAlignment('center')}>Center</button>
  <button  onClick={() => setAlignment('right')}>Right</button>
  <button  onClick={() => setAlignment('justify')}>Justify</button>
  </div>
    </div>

    </div>
    </>

  )
}
export default App