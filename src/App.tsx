import { useQuery, useMutation } from "@apollo/client";
import { FIND, UPDATE } from "./graphql/demo";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const { loading, data } = useQuery(FIND, {
    variables: {
      id: "be173a73-46e0-4797-909d-84443c7337ed",
    },
  });
  const [update] = useMutation(UPDATE);
  function onNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function onDescChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDesc(e.target.value);
  }
  function handleAllChange() {
    update({
      variables: {
        id: "be173a73-46e0-4797-909d-84443c7337ed",
        params: {
          name,
          desc,
        },
      },
    });
  }
  return (
    <div>
      <p>loading: {loading}</p>
      <p>data: {JSON.stringify(data)}</p>
      <p>
        <h2>name:</h2>
        <input onChange={onNameChange} />
      </p>
      <p>
        <h2>desc:</h2>
        <input onChange={onDescChange} />
      </p>
      <hr />
      <button onClick={handleAllChange}>更新按钮</button>
    </div>
  );
}

export default App;
