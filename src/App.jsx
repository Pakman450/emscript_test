import { useEffect, useState, useRef } from 'react'

// import the cpp code
import emRawModule from '/src/cpp/output.mjs'

function readAsyncFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = res => {
      resolve(res.target.result);
    };
    reader.onerror = err => reject(err);

    reader.readAsArrayBuffer(file);
  });
}

function App() {
  const [emModule, setEmModule] = useState(null)

  useEffect( ()=>{

    (async function () {

      setEmModule(await emRawModule())
    }
    )()

  },[])

  

  const loadFile = async (e)=>{
    emModule.readFile(await readAsyncFile(e.target.files[0]))
    // var instance = new emModule.Mol(10, 4);
    // console.log(instance.num_atoms);
    // var instanceObj = emModule.returnObj();
    // console.log(instanceObj.num_atoms);

  }

  return (
    <>
    <div className='text-cyan-700'>
      <p>Hello worldasdf</p>
      <form action="
      
      ">
        <input 
          onChange={loadFile}
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
