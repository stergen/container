import React, { Suspense } from 'react';
import './App.css';

// @ts-ignore
const Child = React.lazy(() => import('child/App'));

function App() {
  return (
    <Suspense>
      <div className="App">
      Father
      </div>
      <Child />
    </Suspense>
  );
}

export default App;
