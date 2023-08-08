import React from 'react'
import {
	JoinUsContent,
	JoinUsForm,
	JoinUsImage,
	JoinUsItem,
	JoinUsItems,
	JoinUsBtn,
	JoinUsAdd
} from '../AuthStyles'
import {
	LoginParams,
	fetchAuth,
	selectErrorAuth
} from '../../../redux/slices/authSlice'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input, MainHeading, Error } from '../../../styles/globalStyle'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../redux/store'
import { useSelector } from 'react-redux'

const Login = () => {
	const errorAuth = useSelector(selectErrorAuth)
	const appDispatch = useAppDispatch()
	const {
		register,
		handleSubmit,
		setError,
		setValue,
		formState: { errors, isValid }
	} = useForm<LoginParams>({
		mode: 'onSubmit'
	})

	const onSubmit: SubmitHandler<LoginParams> = async data => {
		const loginData = {
			email: data.email,
			password: data.password
		}

		appDispatch(fetchAuth(loginData))
	}

	return (
		<JoinUsContent>
			<JoinUsForm onSubmit={handleSubmit(onSubmit)}>
				<MainHeading>Мы снова рады приветствовать вас!</MainHeading>
				<JoinUsItems>
					<JoinUsItem>
						<Input
							$error={errors.email}
							type='email'
							placeholder='Email'
							{...register('email', {
								required: true
							})}
						/>
						{errors.email && <Error>Поле обязательно для заполнения</Error>}
					</JoinUsItem>
					<JoinUsItem>
						<Input
							$error={errors.email}
							type='password'
							placeholder='Пароль'
							{...register('password', {
								required: true
							})}
						/>
						{errors.password && <Error>Поле обязательно для заполнения</Error>}
					</JoinUsItem>
				</JoinUsItems>
				{errorAuth && <Error>{errorAuth}</Error>}
				<JoinUsBtn>Войти</JoinUsBtn>
				<JoinUsAdd>
					Нет аккаунта? <br />
					<Link to='/register'>Зарегистрироваться</Link>
				</JoinUsAdd>
			</JoinUsForm>
			<JoinUsImage src='/img/TimeManagement.png' alt='Save Your Time' />
		</JoinUsContent>
	)
}

export default Login
