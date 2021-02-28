import styles from './ControlPanel.css';

const React = require('react');

/**
 * Панель управления
 */
class ControlPanel extends React.Component {

    handleClick = () => {
        const {onClick} = this.props;
        onClick && onClick();
    }

	render() {
	    return (
            <div className={styles.controlPanel}>
                <button className={styles.startButton} onClick={this.handleClick}>Start</button>
                <div className={styles.score}>Score: {this.props.score}</div>
            </div>
		);
	}
}

export default ControlPanel;