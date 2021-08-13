import axios from "axios";
import { Component } from "react";
import { BASE_URL } from "utils/requests";

class CadCliente extends Component {

    state = {
        profissoes: [],
        entidades: [],
    }

    async componentDidMount() {
        const responseProfissao = axios.get(`${BASE_URL}/profissao/SP/S%C3%83O%20PAULO?api-key=ddd70c32-fc98-4618-b494-a9698f824353`)
        const responseEntidade = axios.get(`${BASE_URL}/entidade/Advogado/SP/S%C3%83O%20PAULO?api-key=4b94dba2-5524-4632-939b-92df1c50a645`)

        this.setState({ profissoes: (await responseProfissao).data })
        this.setState({ entidades: (await responseEntidade).data })
    }

    render() {

        const { profissoes } = this.state;
        const { entidades } = this.state;

        return (
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Dados do Cliente</h5>
                    <form>
                        <div className="form-row align-items-center">
                            <div className="col-auto my-1">

                                <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">Entidade</label>
                                <select className="custom-select mr-sm-2" id="entidade">
                                    <option selected >Selecione a profissão</option>
                                    {profissoes.map((item, index) => (
                                        <option value={index}>{item['profissao']}</option>
                                    ))}
                                </select>

                                <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">Entidade</label>
                                <select className="custom-select mr-sm-2" id="entidade">
                                    <option selected >Selecione a entidade</option>
                                    {entidades.map((item, index) => (
                                        <option value={index}>{item['NomeFantasia']}</option>
                                    ))}
                                </select>

                                <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">UF</label>
                                <select className="custom-select mr-sm-2" id="uf">
                                    <option selected >Selecione</option>
                                    <option value="1">SP</option>
                                </select>

                                <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">Estado</label>
                                <select className="custom-select mr-sm-2" id="cidade">
                                    <option selected >Selecione o Estado</option>
                                    <option value="1">São Paulo</option>
                                </select>


                            </div>
                            <div className="col-auto my-1">
                                <div className="custom-control custom-checkbox mr-sm-2">
                                    <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                    <label className="custom-control-label" htmlFor="customControlAutosizing">Lembrar preferências</label>
                                </div>
                            </div>
                            <div className="col-auto my-1">
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        );
    }

}

export default CadCliente;