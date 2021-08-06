import { render } from "@testing-library/react";
import axios from "axios";
import { Component, useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "utils/requests";

class DataTable extends Component {

    state = {
        profissoes: [],
    }

    async componentDidMount() {
        const response = axios.get(`${BASE_URL}/profissao/SP/S%C3%83O%20PAULO?api-key=ddd70c32-fc98-4618-b494-a9698f824353`)

        this.setState({ profissoes: (await response).data })
    }

    // useEffect(() => {
    //     axios.get(`${BASE_URL}/profissao/SP/S%C3%83O%20PAULO?api-key=ddd70c32-fc98-4618-b494-a9698f824353`)
    //         .then(response => {
    //             setProfissao(response.data);
    //         })

    // }, [])

    render() {

        const { profissoes } = this.state;

        return (
            <div className="table-responsive" >
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>nº</th>
                            <th>Profissões</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            profissoes.map((profissao, index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{profissao['profissao']}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

            </div>

        );
    }

}

export default DataTable;