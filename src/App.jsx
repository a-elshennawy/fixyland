import { lazy, Suspense } from "react";
import "./App.css";
import ThemeProvider from "./Components/ThemeProvider/ThemeProvider";
import SpinnerLoader from "./Components/SpinnerLoader/SpinnerLoader";
const Home = lazy(() => import("./Components/Home"));

function App() {
  return (
    <>
      <ThemeProvider>
        <Suspense fallback={<SpinnerLoader />}>
          <Home />
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
