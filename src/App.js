import {useState} from "react";
import {Portal} from "./Portal";

function App() {

  const [list, setList] = useState([
    {id:'1', title:'Sasha', inPortal:false},
    {id:'2', title:'Masha', inPortal:false},
    {id:'3', title:'Natasha', inPortal:false},
    {id:'4', title:'Gosha', inPortal:false},
    {id:'5', title:'Misha', inPortal:false},
  ])

  const hideElement = (id) => {
    let newList = list.map(el=>{
      if (el.id === id) {
        el.inPortal = !el.inPortal
      }
      return el
    })
    setList(newList)
  }

  const showElement = (title) => {
    let newList = list.map(el=>{
      if (el.title === title) {
        el.inPortal = false
      }
      return el
    })
    setList(newList)
  }

  const deleteElement = (id) => {
    setList(prevList=>prevList.filter(el=>el.id !== id))
  }

  return (
    <div>
      <ol>
        {list.filter(el=>!el.inPortal).map(el=><li style={{border:'1px solid green'}} key={el.id} onClick={hideElement.bind(null, el.id, el.title)}>{el.title}</li>)}
      </ol>

      {
        list.filter(el=>el.inPortal).map(el=>
                <Portal title={el.title} key={el.id}>
                  <div>
                    <p>{el.title}</p>
                    <div>
                      <button onClick={showElement.bind(null, el.title)}>Return</button>
                      <button onClick={deleteElement.bind(null, el.id)}>Close</button>
                    </div>
                  </div>
                </Portal>
        )
      }
    </div>
  );
}

export default App;
