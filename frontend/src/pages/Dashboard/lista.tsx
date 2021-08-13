import Footer from "components/Footer";
import ListaProfissoes from "components/Lista";
import NavBar from "components/NavBar";

const lista = () => {
    return (
        <>
            <NavBar />

            <div className="container">
                <div className="py-3">
                    <h2 className="text-primary">Todos od Planos</h2>
                </div>

                <ListaProfissoes />

            </div>

            <Footer />
        </>
    );
}

export default lista;