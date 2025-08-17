import "./App.css";
import Home from "./Components/Home";
import ThemeProvider from "./Components/ThemeProvider/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
