import React, { useState } from 'react'

export default function HomePage() {
    const [data, setData] = useState(["task1", "task2"])
    const [input, setInput] = useState("")
    const changeInput = (event) => {
        setInput(event.target.value)
    }
    
    const submit = () => {
        if (input.trim() === "") {
            alert("Không được điền nội dung trống");
        } 
        else if (data.includes(input)) {
            alert("Nội dung đã có");
        } 
        else {
            let newData = [...data];
            newData.push(input);
            setData(newData);
            setInput('');
        }
    };
    const deleteItem = (item) => {
        let newData = [...data]
        let indexItem = newData.findIndex((it) => {
            return it == item
        })
        newData.splice(indexItem, 1)
        setData(newData)

    }
    const renderContent = () => {
        let arrJSX = []
        for (let i = 0; i < data.length; i++) {
            arrJSX.push(
                <div style={{ display: 'flex' }}>
                    <h3>{data[i]}</h3>
                    <button onClick={() => { deleteItem() }}>delete</button>
                </div>
            )
        }
        return arrJSX

    }
    return (
        <div>
            <h1>Task list</h1>
            <input onChange={(event) => setInput(event.target.value)} type="text" value={input} />
            <button onClick={() => { submit() }}>submit</button>
            {renderContent()}
        </div>
    )
}
// sau khi submit thì giá trị ô submit mất đi
// 2 nội dung k trùng nhau
// không để nội dung trống
