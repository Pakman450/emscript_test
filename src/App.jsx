import { useEffect, useState } from 'react'



function App() {
  const [count, setCount] = useState(0)
  const [File, setFile] = useState(null);

  useEffect(()=>{

    // call method from utilities
    let vec = window.Module.getVector();

    // Convert to a JavaScript array
    let jsArray = [];
    for (let i = 0; i < vec.size(); i++) {
        jsArray.push(vec.get(i));
    }
  

    console.log(jsArray);

    console.log(window.Module.getStr())
    console.log(window.Module.getMolStr())

    console.log(window.Module.getMolInt())
  },[])

  const printFile = (e)=>{
    console.log(e.target.name)
    console.log(e.target.files[0])

  }

  return (
    <>
    <div className='text-cyan-700'>
      <p>Hello worldasdf</p>
      <form action="
      
      ">
        <input 
          onChange={printFile}
          name='inputFile'
          type="file" 
          className="file-input file-input-bordered w-full max-w-xs" 
        />
      </form>
      

    </div>
    </>
  )
}

export default App
