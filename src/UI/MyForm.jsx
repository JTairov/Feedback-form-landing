import React, { useEffect, useRef, useState } from 'react'
import checkEmail from '../utlis/checkEmail'
import checkName from '../utlis/checkName'
import hideElement from '../utlis/hideElement'
import outlineErrorInput from '../utlis/outlineError'
import Mybutton from './button/Mybutton'
import Mycheckbox from './checkbox/MyCheckbox'
import MyInput from './input/MyInput'

export default function MyForm({setFormIsFilled, ...props}) {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [hasName, setHasName] = useState(false)
	const [emailIsValid, setEmailIsValid] = useState(false)
	const [isChecked, setIsChecked] = useState(false)
	const nameInput = useRef(null)
	const emailInput = useRef(null)
	const checkboxInput = useRef(null)

	useEffect(() => {
		checkName(name, setHasName)
		checkEmail(email, setEmailIsValid)
	}, [name, email])

	function onSubmit(e) {
		e.preventDefault()
		if (hasName && emailIsValid) {
			setFormIsFilled(true)
		} else {
			setFormIsFilled(false)
		}

		hideElement(nameInput, hasName)
		hideElement(emailInput, emailIsValid)
		hideElement(checkboxInput, isChecked)

		outlineErrorInput('nameInput', hasName)
		outlineErrorInput('emailInput', emailIsValid)
		outlineErrorInput('checkboxInput', isChecked)
	}

	return (
		<form>
			<h2 className='form__header'>{props.heading}</h2>
			<p className='form__text'>{props.formText}</p>
			<MyInput
				label='Name'
				tabIndex='1'
				onChange={e => setName(e.target.value)}
				id='nameInput'
			/>
			<p className='error' ref={nameInput} hidden={true}>Please enter your name</p>
			<MyInput
				label='Email address'
				tabIndex='2'
				onChange={e => setEmail(e.target.value)}
				id='emailInput'
			/>
			<p className='error' ref={emailInput} hidden={true}>Please enter a valid email address</p>
			<Mycheckbox
				label='By providing my personal data I agree to be informed about AVS4YOU software deals via email.'
				tabIndex='3'
				setIsChecked={setIsChecked}
				id='checkboxInput'
			/>
			<p className='error checkbox-error' ref={checkboxInput} hidden={true}>Please agree to receive your free license key</p>
			<Mybutton
				tabIndex='4'
				onClick={e => onSubmit(e)}
			>
				Get Free License
			</Mybutton>
		</form>
	)
}
