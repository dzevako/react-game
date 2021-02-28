
import Game from '../game/Game.jsx';
import styles from './Page.css';

const React = require('react');

/**
 * Страница с игрой
 */
class Page extends React.Component {
	
	render() {
		return (
			[
				<div className={styles.header} key="1">SNAKE</div>,
				<div className={styles.flexContainer} key="2">
					<Game width="50" height="30" step="20" speed="300" className={styles.flexContent}/>
				</div>
			]
		)
	}
}

export default Page;