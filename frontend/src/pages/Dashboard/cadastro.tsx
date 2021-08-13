import CadCliente from "components/Cadastro";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const cadastro = () => {
    return (
        <>
            <NavBar />

            <div className="container">
                <div className="py-3">
                    <h2 className="text-primary">Todos clientes</h2>
                </div>

                <CadCliente />

            </div>

            <Footer />
        </>
    );
}

export default cadastro;