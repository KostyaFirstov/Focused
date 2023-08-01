import React, { ChangeEvent } from 'react'
import {
	ClearInput,
	SearchButton,
	SearchInput,
	SearchWrapper
} from './SearchStyles'

const Search = () => {
	const [value, setValue] = React.useState('')
	const inputRef = React.useRef<HTMLInputElement>(null)

	const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const onClearValue = () => {
		setValue('')
		inputRef.current?.focus()
	}

	return (
		<SearchWrapper>
			<SearchInput
				ref={inputRef}
				type='text'
				placeholder='Ищите что угодно...'
				value={value}
				onChange={onChangeValue}
			/>
			{value.length > 0 && (
				<ClearInput onClick={onClearValue}>
					<svg
						width='17'
						height='16'
						viewBox='0 0 17 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<line
							x1='16.0303'
							y1='0.53033'
							x2='2.03033'
							y2='14.5303'
							stroke='#4D4C53'
							strokeWidth='1.5'
						/>
						<line
							y1='-0.75'
							x2='19.799'
							y2='-0.75'
							transform='matrix(0.707107 0.707107 0.707107 -0.707107 1.5 0)'
							stroke='#4D4C53'
							strokeWidth='1.5'
						/>
					</svg>
				</ClearInput>
			)}
			<SearchButton>
				<svg
					width='22'
					height='22'
					viewBox='0 0 22 22'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M10.5417 19.25C15.3512 19.25 19.25 15.3512 19.25 10.5417C19.25 5.73223 15.3512 1.83337 10.5417 1.83337C5.73223 1.83337 1.83337 5.73223 1.83337 10.5417C1.83337 15.3512 5.73223 19.25 10.5417 19.25Z'
						stroke='#4D4C53'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M20.1667 20.1667L18.3334 18.3334'
						stroke='#4D4C53'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</SearchButton>
		</SearchWrapper>
	)
}

export default Search
