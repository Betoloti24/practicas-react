import NavBar from "../components/Navbar"; 
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <NavBar />
            <main className="container">
                <h1>Bienvenido a la página de inicio</h1>
            </main>
            <Footer />
        </>
    )
}

export default Home;