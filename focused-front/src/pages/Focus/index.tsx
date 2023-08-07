import React from 'react'
import {
	FocusAmount,
	FocusContent,
	FocusDescTitle,
	FocusHeader,
	FocusHistory,
	FocusHistoryItem,
	FocusHistoryItemCell,
	FocusHistoryList,
	FocusInfo,
	FocusMain,
	FocusMode,
	FocusModes,
	FocusModesItem,
	FocusModesList,
	FocusOptions,
	FocusStart,
	FocusTime,
	FocusTitle,
	FocusImage,
	FocusWrapper,
	FocusCurrentMode
} from './FocusStyles'

const Focus = () => {
	return (
		<FocusWrapper>
			<FocusMain>
				<FocusContent>
					<FocusCurrentMode>
						<FocusTitle>
							ПОСЛЕДНЯЯ ФОКУСИРОВКА:
							<FocusTime>30:00</FocusTime>
						</FocusTitle>
						<FocusOptions>
							<FocusStart>старт</FocusStart>
							<FocusMode $color='#3EC091'>
								pomodoro
								<svg
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M17.7333 5.33342L9.78325 13.2834C8.99158 14.075 6.64156 14.4417 6.11656 13.9167C5.59156 13.3917 5.94989 11.0417 6.74156 10.25L14.6999 2.29172C14.8962 2.07761 15.1338 1.90549 15.3984 1.78574C15.663 1.66599 15.9492 1.60107 16.2396 1.59496C16.5299 1.58885 16.8186 1.64163 17.088 1.75014C17.3574 1.85865 17.6021 2.02065 17.8072 2.22632C18.0123 2.43198 18.1736 2.67707 18.2813 2.94678C18.3891 3.21651 18.4412 3.50526 18.4343 3.79563C18.4273 4.08601 18.3616 4.372 18.2412 4.63629C18.1207 4.90058 17.9479 5.13774 17.7333 5.33342Z'
										stroke='#3EC091'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M9.16666 3.33325H5C4.11594 3.33325 3.26815 3.68444 2.64302 4.30956C2.01791 4.93469 1.66666 5.78253 1.66666 6.66659V14.9999C1.66666 15.884 2.01791 16.7318 2.64302 17.3569C3.26815 17.9821 4.11594 18.3333 5 18.3333H14.1667C16.0083 18.3333 16.6667 16.8333 16.6667 14.9999V10.8333'
										stroke='#3EC091'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</FocusMode>
						</FocusOptions>
					</FocusCurrentMode>
					<FocusImage src='/img/forest.png' alt='Forest' />
				</FocusContent>
			</FocusMain>
			<FocusInfo>
				<FocusHistory>
					<FocusHeader>
						<FocusDescTitle>Истории фокусировок</FocusDescTitle>
						<FocusAmount>
							<svg
								width='17'
								height='17'
								viewBox='0 0 17 17'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M8.50002 1.41663C4.588 1.41663 1.41669 4.58794 1.41669 8.49996C1.41669 12.4119 4.588 15.5833 8.50002 15.5833C12.412 15.5833 15.5834 12.4119 15.5834 8.49996C15.5834 4.58794 12.412 1.41663 8.50002 1.41663ZM9.20835 4.95829C9.20835 4.56709 8.89123 4.24996 8.50002 4.24996C8.10881 4.24996 7.79169 4.56709 7.79169 4.95829V8.49996C7.79169 8.89117 8.10881 9.20829 8.50002 9.20829C8.89123 9.20829 9.20835 8.89117 9.20835 8.49996V4.95829Z'
									fill='#FBCB18'
								/>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M13.6658 1.62409C13.3892 1.90072 13.3892 2.3492 13.6658 2.62583L14.3742 3.33416C14.6508 3.61078 15.0993 3.61078 15.3759 3.33416C15.6525 3.05754 15.6525 2.60905 15.3759 2.33242L14.6676 1.62409C14.3909 1.34747 13.9424 1.34747 13.6658 1.62409Z'
									fill='#FBCB18'
								/>
							</svg>
							240м.
						</FocusAmount>
					</FocusHeader>
					<FocusHistoryList>
						<FocusHistoryItem>
							<FocusHistoryItemCell>2 ч.</FocusHistoryItemCell>
							<FocusHistoryItemCell>pomodoro</FocusHistoryItemCell>
							<FocusHistoryItemCell>25 July 2023</FocusHistoryItemCell>
						</FocusHistoryItem>
						<FocusHistoryItem>
							<FocusHistoryItemCell>2 ч.</FocusHistoryItemCell>
							<FocusHistoryItemCell>pomodoro</FocusHistoryItemCell>
							<FocusHistoryItemCell>25 July 2023</FocusHistoryItemCell>
						</FocusHistoryItem>
						<FocusHistoryItem>
							<FocusHistoryItemCell>2 ч.</FocusHistoryItemCell>
							<FocusHistoryItemCell>pomodoro</FocusHistoryItemCell>
							<FocusHistoryItemCell>25 July 2023</FocusHistoryItemCell>
						</FocusHistoryItem>
						<FocusHistoryItem>
							<FocusHistoryItemCell>2 ч.</FocusHistoryItemCell>
							<FocusHistoryItemCell>pomodoro</FocusHistoryItemCell>
							<FocusHistoryItemCell>25 July 2023</FocusHistoryItemCell>
						</FocusHistoryItem>
						<FocusHistoryItem>
							<FocusHistoryItemCell>2 ч.</FocusHistoryItemCell>
							<FocusHistoryItemCell>pomodoro</FocusHistoryItemCell>
							<FocusHistoryItemCell>25 July 2023</FocusHistoryItemCell>
						</FocusHistoryItem>
						<FocusHistoryItem>
							<FocusHistoryItemCell>2 ч.</FocusHistoryItemCell>
							<FocusHistoryItemCell>pomodoro</FocusHistoryItemCell>
							<FocusHistoryItemCell>25 July 2023</FocusHistoryItemCell>
						</FocusHistoryItem>
						<FocusHistoryItem>
							<FocusHistoryItemCell>2 ч.</FocusHistoryItemCell>
							<FocusHistoryItemCell>pomodoro</FocusHistoryItemCell>
							<FocusHistoryItemCell>25 July 2023</FocusHistoryItemCell>
						</FocusHistoryItem>
					</FocusHistoryList>
				</FocusHistory>
				<FocusModes>
					<FocusHeader>
						<FocusDescTitle>Сохранённые режимы</FocusDescTitle>
						<FocusAmount>
							<svg
								width='17'
								height='17'
								viewBox='0 0 17 17'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M14.7143 0H11.2857C10.0233 0 9 1.02335 9 2.28572V5.71429C9 6.97666 10.0233 8 11.2857 8H14.7143C15.9767 8 17 6.97666 17 5.71429V2.28572C17 1.02335 15.9767 0 14.7143 0Z'
									fill='#FBCB18'
								/>
								<path
									d='M5.71429 0H2.28571C1.02335 0 0 1.02335 0 2.28572V5.71429C0 6.97666 1.02335 8 2.28571 8H5.71429C6.97665 8 8 6.97666 8 5.71429V2.28572C8 1.02335 6.97665 0 5.71429 0Z'
									fill='#FBCB18'
								/>
								<path
									d='M14.7143 9H11.2857C10.0233 9 9 10.0233 9 11.2857V14.7143C9 15.9767 10.0233 17 11.2857 17H14.7143C15.9767 17 17 15.9767 17 14.7143V11.2857C17 10.0233 15.9767 9 14.7143 9Z'
									fill='#FBCB18'
								/>
								<path
									d='M5.71429 9H2.28571C1.02335 9 0 10.0233 0 11.2857V14.7143C0 15.9767 1.02335 17 2.28571 17H5.71429C6.97665 17 8 15.9767 8 14.7143V11.2857C8 10.0233 6.97665 9 5.71429 9Z'
									fill='#FBCB18'
								/>
							</svg>
							4
						</FocusAmount>
					</FocusHeader>
					<FocusModesList>
						<FocusModesItem>pomodoro</FocusModesItem>
						<FocusModesItem>scrum</FocusModesItem>
						<FocusModesItem>usual</FocusModesItem>
						<FocusModesItem>one more</FocusModesItem>
						<FocusModesItem>one more</FocusModesItem>
						<FocusModesItem>one more</FocusModesItem>
						<FocusModesItem>one more</FocusModesItem>
						<FocusModesItem>one more</FocusModesItem>
						<FocusModesItem>one more</FocusModesItem>
					</FocusModesList>
				</FocusModes>
			</FocusInfo>
		</FocusWrapper>
	)
}

export default Focus
