import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = useRef();
    const [prevState, setPrevState] = useState("block");
    const handleClick = () => {
        if (prevState === "block") {
            blockRef.current.style.width = "80px";
            blockRef.current.style.height = "150px";
            blockRef.current.textContent = "text";
            return setPrevState("text");
        };
        if (prevState === "text") {
            blockRef.current.style.width = "60px";
            blockRef.current.style.height = "40px";
            blockRef.current.textContent = "block";
            return setPrevState("block");
        }
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={blockRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button className="btn btn-primary mt-2" onClick={handleClick}>Изменить</button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
