import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import ProductProvider from "./provider/ProductProvider"


function App() {


  return (
    <>
      <ProductProvider>
        <Navbar />
        <ProductList />
      </ProductProvider>

    </>
  )
}

export default App
