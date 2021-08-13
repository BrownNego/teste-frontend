import Cadastro from 'pages/Dashboard/cadastro';
import Lista from 'pages/Dashboard/lista';
import Home from 'pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/cadastro">
                    <Cadastro />
                </Route>
                <Route path="/lista">
                    <Lista />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;