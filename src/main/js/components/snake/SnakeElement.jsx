import styles from './SnakeElement.css';

const React = require('react');

/**
 * Элемент тела змейки
 */
class SnakeElement extends React.Component {

	render() {
        const {x, y, size} = this.props;
        const style = {
            width: size + "px",
            height: size + "px",
            left: x * size,
            top: y * size
          };
	    return (
            <div className={styles.snakeElement} style={style} />
		)
	}
}

export default SnakeElement;