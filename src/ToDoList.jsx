import { useMemo, useState, useCallback } from 'react';
const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};
function ToDoList() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    //useMemo example
    const calculation = useMemo(() => expensiveCalculation(count), [count]);
    const increment = () => {
        setCount((c) => c + 1);
    };

    //useCallback example
    const addTodo = useCallback(() => {
        let length = todos.length;
        setTodos((t) => [...t, `activity ${length}`]);
    }, [todos]);

    return (
        <>
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
        </>
    )
}

export default ToDoList;