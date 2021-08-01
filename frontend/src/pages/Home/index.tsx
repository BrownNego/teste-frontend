import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Fluid jumbotron</h1>
                    <p className="lead">Este é um jumbotron modificado que ocupa todo o espaço horizontal de seu elemento pai.</p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard"> Acessar o dashboard</Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;