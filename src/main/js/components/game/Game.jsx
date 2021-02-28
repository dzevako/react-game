import GameField from './GameField.jsx';
import ControlPanel from './controls/ControlPanel.jsx';

const React = require('react');
const KeyboardEventHandler = require('react-keyboard-event-handler');

/**
 * Главное поле игры
*/
class Game extends React.Component {

    roundId = null;
    left = 'left';
    right = 'right';
    up = 'up';
    down = 'down';
    leftRight = [this.left, this.right];
    upDown = [this.up, this.down];

    constructor(props) {
        super(props);

        this.state = {crash: true,
                      score: 0};

        this.startRound = this.startRound.bind(this);
    }

    startRound() {
        this.setState({target: this.getNewTarget(),
                       snake: [{x: 39, y: 7}, {x: 38, y: 7}, {x: 37, y: 7}],
                       direction: this.right,
                       crash: false,
                       score: 0})
        this.roundId = setInterval(() => this.roundStep(), this.props.speed);
    }

    stopRound() {
        clearInterval(this.roundId);
    }

    roundStep() {
        let {target, snake, direction, crash, score} = this.state;
        const frontElement = this.getNextStep(snake[0], direction);

        if (target.x === frontElement.x && target.y === frontElement.y) {
            target = this.getNewTarget();
            score = score + 1;
            snake.unshift(frontElement);
        } else {
            if (this.moveIsValid(snake, frontElement)) {
                snake.pop();
                snake.unshift(frontElement);
            } else {
                crash = true;
                this.stopRound();
            }
        }

        this.setState({target, snake, crash, score})
    }

    getNextStep(frontElement, direction) {
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

        if (hitch.length > 0) {
            return false;
        }

        return true;
    }
	
	render() {
        const {target, snake, crash, score} = this.state;
        const {width, height, step} = this.props;
        const {left, right, up, down} = this;

	    return (
            <div>
                <GameField 
                    width={width} 
                    height={height} 
                    step={step} 
                    target={target} 
                    snake={snake} 
                    crash={crash}
                />
                <ControlPanel 
                    onClick={crash && this.startRound}
                    score = {score}
                />
                <KeyboardEventHandler
                    handleKeys={[left, right, up, down]}
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

export default Game;