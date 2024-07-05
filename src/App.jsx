import { useEffect, useState, useRef } from 'react'

// import the cpp code
import emRawModule from '/src/cpp/output.mjs'
// import triangle from '/src/cpp/opengl/triangle_minimal.mjs'

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
  const canvasRef = useRef(null);

  useEffect( ()=>{

    (async function () {

      setEmModule(await emRawModule())
    }
    )()

    const loadModule = async () => {
      const Module = await import('/src/cpp/opengl/main.mjs');
      Module.default({
        onRuntimeInitialized: () => {
          const canvas = canvasRef.current;
          const GL = Module.GL.createContext(canvas, {
            antialias: true,
            preserveDrawingBuffer: true,
          });
          Module.GL.makeContextCurrent(GL);
          Module.render();
        }
      });
    };

    loadModule();
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
      <canvas ref={canvasRef}  width="800" height="600"/>
    </div>
    </>
  )
}

export default App
