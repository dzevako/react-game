import Page from './components/page/Page.jsx';

const React = require('react');
const ReactDOM = require('react-dom');

/**
 * Client Entry Point
 */
class App extends React.Component {

	render() {
        return <Page />
    }
}

ReactDOM.render (
		<App />,
		document.getElementById('root')
	)
	
export default App;