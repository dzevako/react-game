import Target from '../target/Target.jsx';
import SnakeElement from '../snake/SnakeElement.jsx';
import styles from './Square.css';

const React = require('react');
const KeyboardEventHandler = require('react-keyboard-event-handler');

/**
 * Главное поле игры
*/
class Square extends React.Component {

    constructor(props) {
        super(props);
        //this.state = {target: {x : 5, y : 7}};
        this.state = {target: this.getNewTarget(),
                      snake: [{x: 5, y: 7}, {x: 4, y: 7}, {x: 3, y: 7}],
                      direction: 'right'};

        setInterval(() => {
            let {target, snake, direction} = this.state;
            
            const frontElement = this.step(snake[0], direction);
            if (target.x === frontElement.x && target.y === frontElement.y){
                target = this.getNewTarget();
            } else {
                snake.pop();
            }
            snake.unshift(frontElement);
            this.setState({target, snake})
        }, 100);
    }

    step(frontElement, direction) {
        let x = frontElement.x;
        let y = frontElement.y;
        if (direction === 'left') {
            x = x - 1;
        }
        if (direction === 'right') {
            x = x + 1;
        }
        if (direction === 'up') {
            y = y - 1;
        }
        if (direction === 'down') {
            y = y + 1;
        }
        return {x, y};
    }
	
	render() {
        const {target, snake} = this.state;
	return (
            <div className={styles.square}>
                <Target x={target.x} y={target.y} size={this.props.step}/>
                {snake.map((el) => {
                    return (
                        <SnakeElement x={el.x} y={el.y} size={this.props.step} key={this.getKey(el)}/>
                    );
                })}
                <KeyboardEventHandler
                    handleKeys={['left', 'right', 'up', 'down']}
                    onKeyEvent={(key, e) => this.processChangeDirection(key)} 
                />
            </div>
		)
	}

    getNewTarget() {
        return {x : this.getRandomInt(50), y : this.getRandomInt(30)};
    }

    getKey(el) {
        return (el.x + el.y) * (el.x - el.y);
    }

    processChangeDirection(key) {
        let {direction} = this.state;
        if ((direction === 'left' || direction === 'right') &&
        (key === 'left' || key === 'right') ||
        (direction === 'up' || direction === 'down') &&
        (key === 'up' || key === 'down')) {
            return;
        }
        this.setState({direction : key});
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}

export default Square;