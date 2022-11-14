import React, { useRef } from 'react'
import classes from './MyCheckbox.module.css'

export default function Mycheckbox({setIsChecked, ...props}) {
	const nativeCheckbox = useRef(null)

	function checkboxisChecked() {
		if (nativeCheckbox.current.checked == true) {
			setIsChecked(true)
		}
	}

	return (
		<div className={classes.checkboxBlock}>
			<label className={classes.label} htmlFor='checkbox'>
				<input 
					type='checkbox'
					className={classes.nativeCheckbox}
					id='checkbox' 
					ref={nativeCheckbox} 
					onChange={checkboxisChecked}
				/>
				<span className={classes.customCheckbox} {...props}></span>
				<span className={classes.text}>{props.label}</span>
			</label>
		</div>
	)
}
