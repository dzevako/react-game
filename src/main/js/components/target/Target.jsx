import styles from './Target.css';

const React = require('react');

/**
 * Цель для змейки
 */
class Target extends React.Component {

    constructor(props) {
        super(props);
        //this.state = {target: {x : 5, y : 7}};
        //this.state = {target: {x : this.getRandomInt(50), y : this.getRandomInt(30)}};
    }

	render() {
        const {x, y, size} = this.props;
        const style = {
            width: size + "px",
            height: size + "px",
            left: x * size,
            top: y * size
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