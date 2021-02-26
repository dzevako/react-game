import styles from './ControlPanel.css';

const React = require('react');

/**
 * Панель управления
 */
class ControlPanel extends React.Component {
	
    constructor(props) {
        super(props);

        this.state = {score: 0};
    }

	render() {
	    return (
            <div className={styles.controlPanel}>
                <div className={styles.score}>{this.state.score}</div>
                <button className={styles.startButton} onClick={()=> this.props.onStart}>Start</button>
            </div>
		);
	}
}

export default ControlPanel;