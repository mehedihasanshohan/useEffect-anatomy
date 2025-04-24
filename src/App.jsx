import './App.css'
import Timer from './compponents/cleanup/Timer'
import MyComponents from './compponents/MyComponents'
import VideoApp from './compponents/videoplayer/VideoApp'

function App() {

  return (
   <>
    <h2 className='text-center'><span className='text-rose-600 font-bold'><i >UseEffect </i></span><span className='text-orange-400 font-bold'>anatomy</span></h2>
   <MyComponents></MyComponents>
    <VideoApp></VideoApp>
    <Timer></Timer>
   </>
  )
}

export default App
