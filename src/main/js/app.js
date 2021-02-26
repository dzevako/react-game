import Game from './components/game/Game';

const React = require('react');
const ReactDOM = require('react-dom');

/**
 * Client Entry Point
 */
class App extends React.Component {

	render() {
        return <Game />
    }
}

ReactDOM.render (
		<App />,
		document.getElementById('root')
	)
	
export default App;