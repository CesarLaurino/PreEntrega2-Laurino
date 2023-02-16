import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Productos from "./components/Productos";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer";

import ItemList from "./components/ItemList";
import Item from "./components/Item";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
      <ItemList />
      <Item />
      <Productos />
      <Footer />
    </div>
  );
}

export default App;

