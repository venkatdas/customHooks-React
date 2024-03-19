
import UseFetch from "./hooks/UseFetch";
import "./App.css";
function App() {
  const { data, iserror, isloading } = UseFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  console.log(data);

  if (iserror) return <p>Error...!</p>;
  if (isloading) return <h1>Loading...!</h1>;
  return (
    <div>
      {data && (
        <ul className="App">
          {data.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
