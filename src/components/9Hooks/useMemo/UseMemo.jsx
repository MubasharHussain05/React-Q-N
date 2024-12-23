// The useMemo hook is used in React to optimize performance by memoizing the result of a computation. 
// It prevents expensive calculations from being re-executed unless their dependencies have changed.

import { useMemo, useState } from 'react';

const Child = React.memo(({ data }) => {
    console.log("Child component rendered");
    return <p>Data: {data}</p>;
});

const App = () => {
    const [count, setCount] = useState(0);

    // Memoized data
    const data = useMemo(() => {
        return `Count is ${count}`;
    }, [count]);

    return (
        <div>
            <Child data={data} />
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default App;
