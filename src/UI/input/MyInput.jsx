import React from 'react'
import classes from './MyInput.module.css'


export default function MyInput(props) {
	return (
		<div className={classes.inputBlock}>
			<label className={classes.label}>
				<span className={classes.text}>{props.label}</span>
				<input {...props} className={classes.input}/>
			</label>
		</div>
	)
}
