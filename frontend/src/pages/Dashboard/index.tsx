import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (
        <>
            <NavBar />

            <div className="container">
                <h1 className="text-primary py-3">Dashboard de clientes</h1>

                <div className="row px-3">

                </div>
                <div className="py-3">
                    <h2 className="text-primary">Todos clientes</h2>
                </div>

                <DataTable />

            </div>

            <Footer />
        </>
    );
}

export default Dashboard;