import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usePageBottom from './hooks/usePageBottom'
function App() {
const [items, setItems] = useState(
  Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)
);
const isBottom = usePageBottom();

const loadMoreItems = () => {
  const nextItems = Array.from(
    { length: 10 },
    (_, i) => `Item ${items.length + i + 1}`
  );
  setItems([...items, ...nextItems]);
};

useEffect(() => {
  if (isBottom) {
    loadMoreItems();
  }
}, [isBottom]);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item}
          style={{ margin: "10px", padding: "10px", border: "1px solid #ddd" }}
        >
          {item}
        </div>
      ))}
      {isBottom && <div>Loading more items...</div>}
    </div>
  );
}

export default App
