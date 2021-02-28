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

    handleClick = () => {
        const {onClick} = this.props;
        onClick && onClick();
    }

	render() {
	    return (
            <div className={styles.controlPanel}>
                <button className={styles.startButton} onClick={this.handleClick}>Start</button>
                <div className={styles.score}>{this.state.score}</div>
            </div>
		);
	}
}

export default ControlPanel;