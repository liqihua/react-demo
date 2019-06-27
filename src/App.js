
import React from 'react'
import List from './pages/list/List'
import { Provider } from 'react-redux'
import store from './store'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <List/>
            </Provider>
        );
    }
}

export default App;
