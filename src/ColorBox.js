import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';
class ColorBox extends Component {
	state = {
		copied: false
	};
	changeCopyState = () => {
		this.setState(
			{
				copied: true
			},
			() => {
				setTimeout(() => this.setState({ copied: false }), 1500);
			}
		);
	};
	render() {
		const { name, background, moreURL, showLink } = this.props;
		const { copied } = this.state;
		return (
			<CopyToClipboard onCopy={this.changeCopyState} text={background}>
				<div className='ColorBox' style={{ background }}>
					<div style={{ background }} className={`copy-overlay ${copied && 'show'}`} />
					<div className={`copy-msg ${copied && 'show'}`}>
						<h1>COPIED!</h1>
						<p>{background}</p>
					</div>
					<div className='copy-container'>
						<div className='box-content'>
							<span>{name}</span>
						</div>
						<button className='copy-button'>Copy</button>
					</div>
					{showLink && (
						<Link to={moreURL} onClick={(e) => e.stopPropagation()}>
							<span className='see-more'>More</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}
export default ColorBox;
