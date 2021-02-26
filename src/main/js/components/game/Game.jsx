//import Block from '../block/Block.jsx';
import ControlPanel from './controls/ControlPanel.jsx';
import GamePanel from './main/GamePanel.jsx';
import styles from './Game.css';

const React = require('react');

/**
 * Игра
 */
class Game extends React.Component {


	
	render() {
	return (
			[
				<div className={styles.header} key="1">SNAKE</div>,
				<div className={styles.topMenu} key="2"></div>,
				<div className={styles.flexContainer} key="3">
					<div className={styles.flexContent} key="4">
						<GamePanel width="50" height="30" step="20" speed="300"/>
						<ControlPanel/>
					</div>
				</div>
			]
		)
	}
}

export default Game;