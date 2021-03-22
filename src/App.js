import "./styles.css";
import { Hello } from "./Hello";
import { Counter } from "./Counter";

export default function App() {
  return (
    <div className="App">
      <h1>Saludos</h1>
      <Hello name="Claudio" />
      <Counter />
    </div>
  );
}
