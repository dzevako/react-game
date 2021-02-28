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
        const {onClick, score} = this.props;
        const cm = styles.startButton + (!onClick ? " " + styles.disabled : "");
	    return (
            <div className={styles.controlPanel}>
                <button disabled={!onClick} className={cm} onClick={this.handleClick}>START</button>
                <div className={styles.score}>Score: {score}</div>
            </div>
		);
	}
}

export default ControlPanel;