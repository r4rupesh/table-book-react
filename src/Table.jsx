import { useState } from "react";
import "./Table.css";

export default function Table() {
    const [input, setInput] = useState("");

    const inputChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <>
            <div className="container">
           {input.trim() === "" || isNaN(input) ?
                <h1 className="title">Table Book</h1>: <h1 className="title">Table Of {input}</h1>}

                <input type="text" onChange={inputChange} value={input} placeholder="Enter number" className="input"/>

                {/* Check if input is a number and not empty */}
                {input.trim() === "" ? null : isNaN(input) ? (
                    <div>Input number only</div>
                ) : input.length > 9 ? (
                    <div>Number exceeds 9 characters</div>
                ) : (
                    <div className="table">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="multiply">
                                {input} X {i + 1} = {input * (i + 1)}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
