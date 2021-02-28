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

    handleBoostChange= (value) => {
        const {onBoostChange} = this.props;
        onBoostChange && onBoostChange(value);
    }

    mayBeDisabled = (style, disabled) => {
        return style + (disabled ? " " + styles.disabled : "");
    }

	render() {
        const {onClick, score} = this.props;

	    return (
            <div className={styles.controlPanel}>
                <button disabled={!onClick} 
                    className={this.mayBeDisabled(styles.startButton, !onClick)} 
                    onClick={this.handleClick}>START
                </button>
                <div className={styles.boost}>
                    Boost: 
                    <input 
                        disabled={!onClick} 
                        className={this.mayBeDisabled(styles.boost, !onClick)} 
                        onChange={(e) => this.handleBoostChange(e.target.value)} 
                    />
                    %
                </div>
                <div className={styles.score}>Score: {score}</div>
            </div>
		);
	}
}

export default ControlPanel;