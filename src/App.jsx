import { useEffect, useState } from 'react'

// import the cpp code
import Module from '/src/cpp/output.mjs';

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
  let myModule;
  useEffect( ()=>{

    async function getModule() {

      myModule =  await Module();

      let vec = myModule.getVector();
      // console.log(vec)
      // Convert to a JavaScript array
      let jsArray = [];
      for (let i = 0; i < vec.size(); i++) {
          jsArray.push(vec.get(i));
      }
    
  
      console.log(jsArray);
      console.log("jsArray");

      console.log(myModule.getStr())
      console.log(myModule.getMolStr())

      console.log(myModule.getMolInt())
    }
    getModule()


  },[])

  const loadFile = async (e)=>{

    myModule.readFile(await readAsyncFile(e.target.files[0]))


    var instance = new myModule.Mol(10, 4);

    console.log(instance.num_atoms);

    var instanceObj = myModule.returnObj();

    console.log(instanceObj.num_atoms);
    
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
