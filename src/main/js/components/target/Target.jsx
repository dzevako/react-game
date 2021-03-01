import styles from './Target.css';

const React = require('react');

/**
 * Цель для змейки
 */
class Target extends React.Component {

	render() {
        const {x, y, size} = this.props;
        const style = {
            width: size + "px",
            height: size + "px",
            left: x * size + "px",
            top: y * size + "px"
          };
	    return (
            <div className={styles.target + " " + styles.blink} style={style} />
		)
	}

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}

export default Target;