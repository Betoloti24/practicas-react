import { ProductsProvider } from "../contexts/ProductsContext";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import Indicators from "../components/Indicators";

import '../css/pages/Productos.css';

function Products() {
    return (
        <ProductsProvider>
            <NavBar />
            <main className="container-fluid">
                <div className="dashboard grid-container">
                    <Filter />
                    <Indicators />
                </div>
            </main>
            <Footer />
        </ProductsProvider>
    )
}

export default Products;