import { useEffect, useState } from 'react'

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

  const loadFile = async (e)=>{

    Module.readFile(await readAsyncFile(e.target.files[0]))


    Module.readFile(FileContent)
    var instance = new Module.Mol(10, 4);

    console.log(instance.num_atoms);

    var instanceObj = window.Module.returnObj();

    console.log(instanceObj.num_atoms);
    console.log(FileContent)
    
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
