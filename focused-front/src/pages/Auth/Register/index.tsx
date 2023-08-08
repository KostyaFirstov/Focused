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
	RegisterParams,
	fetchAuth,
	fetchAuthRegister,
	selectErrorAuth
} from '../../../redux/slices/authSlice'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input, MainHeading, Error } from '../../../styles/globalStyle'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../redux/store'
import { useSelector } from 'react-redux'

const Register = () => {
	const errorAuth = useSelector(selectErrorAuth)
	const appDispatch = useAppDispatch()
	const {
		register,
		handleSubmit,
		setError,
		setValue,
		formState: { errors, isValid }
	} = useForm<RegisterParams>({
		mode: 'onSubmit'
	})

	const onSubmit: SubmitHandler<RegisterParams> = async data => {
		const registerData = {
			username: data.username,
			email: data.email,
			password: data.password
		}

		appDispatch(fetchAuthRegister(registerData))
	}

	return (
		<JoinUsContent>
			<JoinUsForm onSubmit={handleSubmit(onSubmit)}>
				<MainHeading>Регистрируйтесь и побеждайте!</MainHeading>
				<JoinUsItems>
					<JoinUsItem>
						<Input
							$error={errors.username}
							type='text'
							placeholder='Имя'
							{...register('username', {
								required: true
							})}
						/>
						{errors.username && <Error>Поле обязательно для заполнения</Error>}
					</JoinUsItem>
					<JoinUsItem>
						<Input
							$error={errors.email}
							type='text'
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
				<JoinUsBtn>Зарегистрироваться</JoinUsBtn>
				<JoinUsAdd>
					Есть аккаунт? <br />
					<Link to='/login'>Войти</Link>
				</JoinUsAdd>
			</JoinUsForm>
			<JoinUsImage src='/img/TimeManagement.png' alt='Save Your Time' />
		</JoinUsContent>
	)
}

export default Register
