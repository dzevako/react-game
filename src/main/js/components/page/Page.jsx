//import Block from '../block/Block.jsx';
import Square from '../square/Square.jsx';
import styles from './Page.css';

const React = require('react');

/**
 * Разметка страницы (сетка с блоками)
 */
class Page extends React.Component {
	
	render() {
	return (
			[
				<div className={styles.header} key="1"></div>,
				<div className={styles.topMenu} key="2"></div>,
				<div className={styles.container} key="3">
					<div className={styles.leftMenu} key="4"></div>
					<div className={styles.content} key="5">
						<Square step="20"/>
					</div>
				</div>
			]
		)
	}
}

export default Page;