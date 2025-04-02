
import './App.css'
import Star from './components/Star'
function App() {


  return (
    <>
       <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <h1 className="text-2xl font-bold mb-4">Rate this Product</h1>
            <Star/>
        </div>
    </>
  )
}

export default App
