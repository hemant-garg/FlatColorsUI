import React from 'react';
import { withStyles } from '@material-ui/styles';
import { SortableElement } from 'react-sortable-hoc';
import MenuIcon from '@material-ui/icons/Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/DraggableColorBoxStyles';
const DraggableColorBox = SortableElement(({ color, classes, name, handleClick }) => {
	return (
		<div className={classes.root} style={{ backgroundColor: color }}>
			<span>
				<MenuIcon className={classes.menuIcon} />
			</span>
			<div className={classes.boxContent}>
				<span className={classes.colorName}>{name}</span>
				<span>
					<DeleteIcon onClick={handleClick} className={classes.deleteIcon} />
				</span>
			</div>
		</div>
	);
});
export default withStyles(styles)(DraggableColorBox);
