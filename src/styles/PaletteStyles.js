import sizes from './mediaSizes';
export default {
	Palette: {
		height: '100vh',
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column'
	},
	paletteColors: {
		height: '88%'
	},
	goBack: {
		width: '20%',
		height: '50%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-4px',
		opacity: 1,
		backgroundColor: 'black',
		'& a': {
			width: '100px',
			// height: '30px',
			position: 'absolute',
			display: 'inline-block',
			top: '50%',
			left: '50%',
			padding: '.7rem .5rem',
			transform: 'translate(-50%, -50%)',
			textAlign: 'center',
			outline: 'none',
			background: 'rgba(255, 255, 255, .3)',
			fontSize: '1rem',
			lineHeight: '30px',
			color: '#fff',
			textTransform: 'uppercase',
			textDecoration: 'none',
			borderRadius: '5px',
			border: 'none',
			[sizes.down('xs')]: {
				width: '70px',
				padding: '.5rem .3rem',
				fontSize: '1rem'
			}
		},
		[sizes.down('lg')]: {
			width: '25%',
			height: '33.3333%'
		}
	}
};
