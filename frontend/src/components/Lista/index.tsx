import axios from "axios";
import { useState } from "react";
import { Component } from "react";
import { BASE_URL } from "utils/requests";

class ListaProfissoes extends Component {

    state = {
        planos: [],
    }

    async componentDidMount() {



        const dados = {
            "entidade": "CAASP",
            "uf": "SP",
            "cidade": "São Paulo",
            "datanascimento": ["1987-09-16"]
        }

        const listaClientes = axios.post(`${BASE_URL}/plano?api-key=261fd4d0-fd9f-468a-afa9-f5a89ed3701c`, dados);


        this.setState({ planos: (await listaClientes).data.planos })
        // console.log((await listaClientes).data.planos)
    }

    render() {

        const { planos } = this.state;

        return (
            <div>
                <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">Entidade</label>
                <select className="custom-select mr-sm-2" id="uf">
                    <option selected >Selecione</option>
                    <option value="SP">SP</option>
                    <option value="RJ">RJ</option>
                </select>
                <table className="table">
                    <thead>
                        <tr >
                            <th>id</th>
                            <th>Plano</th>
                            <th>Nome do Plano</th>
                            <th>Operadora</th>
                            <th>Valor</th>
                        </tr>

                    </thead>
                    <tbody>
                        {planos.map((item, id) => (
                            <tr key={id}>
                                <th scope="row">{item['id']}</th>
                                <td>{item['plano']}</td>
                                <td>{item['nome_plano_ans']}</td>
                                <td>{item['operadora']}</td>
                                <td>{item['precos']['total']}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        );
    }

}

export default ListaProfissoes;