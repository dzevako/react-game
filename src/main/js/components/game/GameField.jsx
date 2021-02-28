import Target from '../target/Target.jsx';
import SnakeElement from '../snake/SnakeElement.jsx';
import styles from './GameField.css';

const React = require('react');

/**
 * Главное поле игры
*/
class GameField extends React.Component {

	render() {

        const {width, height, step, target, snake, crash} = this.props;
        console.log(width)
        const style = {
            width: width * step + "px",
            height: height * step + "px",
        };

        const cm = styles.gameField + (crash ? " " + styles.crash : ""); 
	    return (
            <div className={cm} style={style}>

                <Target x={target.x} y={target.y} size={step}/>

                {snake.map((el, index) => {
                    return (
                        <SnakeElement x={el.x} y={el.y} size={step} key={index}/>
                    );
                })}

            </div>
		)
	}
}

export default GameField;