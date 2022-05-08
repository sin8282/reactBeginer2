import Button from "./Button"
import style from "./title.module.css"
import React from "react"
//import {useState} from "react"

function App() {
    const [count, setValue] = React.useState(0);
    const [keyWord, setKeyWord] = React.useState("");
    const onClick = () => {
        setValue(prev=> prev + 1);
    }
    const onChange = (event) => {
        setKeyWord(event.target.value);
    }
    console.log("called Again... Again...");
    React.useEffect(
        () => {
            console.log("Program must be called once");
        }, []
    );
    React.useEffect(
        () => {
            console.log("keyword searched...", keyWord);
        }, [keyWord, count]// keyWord가 바뀔때만 한번 실행한다.
    );
    return (
        <div>
            <h1 className={style.test}>Welcome Back!</h1>
            <input
                value={keyWord}
                onChange={onChange}
                type="text"
                placeholder="search here..."
            />
            <h1>{count}</h1>
            <button onClick={onClick} >count</button>
            <Button  text={"contine"} />
        </div>
  );
}

export default App;