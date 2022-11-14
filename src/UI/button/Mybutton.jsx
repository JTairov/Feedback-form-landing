import React from 'react'
import classes from './MyButton.module.css'

export default function Mybutton(props) {
	return (
		<button {...props} className={classes.button}>
			{props.children}
		</button>
	)
}
