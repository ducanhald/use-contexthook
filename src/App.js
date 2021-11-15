import Content from "./Content";
import { ThemeProvider } from "./ThemeContext";
import { ThemeContext } from "./ThemeContext";
import "./App.css";
import { useContext } from "react";

function App() {
  const Context = useContext(ThemeContext);
  return (
    <ThemeProvider>
      <div style={{ padding: 300 }} className="App">
        <button onClick={Context.handleToggle}>Toggle</button>
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
