
import React from 'react'
import List from './pages/list/List'
import { Provider } from 'react-redux'
import store from './store'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Route path='/' exact component={List}></Route>
                    <Route path='/item' exact render={() => <div>item</div>}></Route>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
