import "./styles.css";
// import { Hello } from "./Hello";
// import { Counter } from "./Counter";
// import { Conditional } from "./Conditional";
import Notes from "./Notas";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Saludos</h1>
      <Hello name="Claudio" /> <Counter />
      <Conditional totalMessages={10} />*/}
      <Notes notes={{}} />
    </div>
  );
}
