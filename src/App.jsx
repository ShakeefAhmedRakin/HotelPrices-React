import Nav from "./components/Nav/Nav";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <Nav></Nav>

      <main className="mt-36">
        <PriceOptions></PriceOptions>
      </main>
    </>
  );
}

export default App;
