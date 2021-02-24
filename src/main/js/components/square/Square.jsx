import Target from '../target/Target.jsx';
import SnakeElement from '../snake/SnakeElement.jsx';
import styles from './Square.css';

const React = require('react');
const KeyboardEventHandler = require('react-keyboard-event-handler');

/**
 * Главное поле игры
*/
class Square extends React.Component {

    roundId = null;
    left = 'left';
    right = 'right';
    up = 'up';
    down = 'down';
    leftRight = [this.left, this.right];
    upDown = [this.up, this.down];

    constructor(props) {
        super(props);

        this.state = {target: this.getNewTarget(),
                      snake: [{x: 39, y: 7}, {x: 38, y: 7}, {x: 37, y: 7}],
                      direction: this.right,
                      crash: false};
    }

    componentDidMount() {
        this.startRound()
    }

    startRound() {
        this.roundId = setInterval(() => this.roundStep(), this.props.speed);
    }

    stopRound() {
        clearInterval(this.roundId);
    }

    roundStep() {
        let {target, snake, direction, crash} = this.state;
            
        const frontElement = this.snakeStep(snake[0], direction);
        console.log(frontElement.x + " " + frontElement.y)
        if (target.x === frontElement.x && target.y === frontElement.y){
            target = this.getNewTarget();
        } else {
            if (this.moveIsValid(snake, frontElement)) {
                snake.pop();
                snake.unshift(frontElement);
            } else {
                crash = true;
                this.stopRound();
            }
        }

        this.setState({target, snake, crash})
    }

    snakeStep(frontElement, direction) {
        let x = frontElement.x;
        let y = frontElement.y;
        switch (direction) {
            case this.left: x = x - 1; break;
            case this.right: x = x + 1; break;
            case this.up: y = y - 1; break;
            case this.down: y = y + 1; break;
        }

        return {x, y};
    }

    moveIsValid(snake, frontElement) {
        const {width, height} = this.props;
        const x = frontElement.x;
        const y = frontElement.y;
        if (x < 0 || y < 0 || x >= width || y >= height) {
            return false;
        }

        const lastIndex = snake.length - 1;
        const hitch = snake.filter((item, index) => {
            return index != lastIndex && item.x == x && item.y == y
        });

        console.log(hitch.length)

        if (hitch.length > 0) {
            return false;
        }

        return true;
    }
	
	render() {
        const {target, snake, crash} = this.state;
        const {width, height, step} = this.props;
        const style = {
            width: width * step + "px",
            height: height * step + "px",
        };

        const cm = styles.square + (crash ? " " + styles.crash : ""); 
	    return (
            <div className={cm} style={style}>
                <Target x={target.x} y={target.y} size={this.props.step}/>
                {snake.map((el, index) => {
                    return (
                        <SnakeElement x={el.x} y={el.y} size={step} key={index}/>
                    );
                })}
                <KeyboardEventHandler
                    handleKeys={[this.left, this.right, this.up, this.down]}
                    onKeyEvent={(key, e) => this.processChangeDirection(key)} 
                />
            </div>
		)
	}

    getNewTarget() {
        return {x : this.getRandomInt(50), y : this.getRandomInt(30)};
    }

    processChangeDirection(key) {
        let {direction} = this.state;

        // Forbid turn for 180 degrees
        if (this.upDown.indexOf(key) > -1 && this.upDown.indexOf(direction) > -1
        || this.leftRight.indexOf(key) > -1 && this.leftRight.indexOf(direction) > -1) {
            return;
        }
        
        this.setState({direction : key});
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}

export default Square;