import './style.css'
import { useState } from 'react'

function App() {
  const [toDos, setTodos] = useState([])
  const [toDo, setTodo] = useState('')

  var day = new Date();
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dayName = days[day.getDay()];

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {dayName} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => {
          setTodo(e.target.value)
        }} type="text" placeholder="🖊️ Add item..." />
        <a onClick={() => setTodos([...toDos, {
          status: false,
          text: toDo,
          id: Date.now(),
        }])
        } ><i className="fas fa-plus"></i></a>
      </div>
      <div className="todos">
        {
          toDos.map((object, index) => {
            return (
              <div className="todo" key={index}>
                <div className="left">
                  <input value={object.status} onClick={(e) => {
                    setTodos(toDos.filter(obj2 => {
                      if (obj2.id == object.id) {
                        obj2.status = e.target.checked
                      }
                      return obj2
                    }))
                  }} type="checkbox" name="" id="" />

                  <Check object={object} />
                </div>
                <div className="right">
                  <a onClick={() => {
                    setTodos(toDos.filter(obj2 => {
                      if (object.id == obj2.id) {
                        return false
                      } else {
                        return true
                      }
                    }))
                  }}>
                    <i className="fas fa-times"></i>
                  </a>
                </div>
              </div>
            )
          })
        }


        {
          /*
          toDos.map((obj,index)=>{
              if(obj.status){
                return <h1 key={index}>Hi {obj.text} Active</h1>
              }else{
                return null
              }
          })
          */
        }

      </div>
    </div>
  );
}

export default App;

function Check({ object }) {
  if (object.status) {
    return <p><del style={{color : 'black'}}>{object.text}</del></p>
  } else {
    return <p>{object.text}</p>
  }
}