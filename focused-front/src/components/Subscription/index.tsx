import React from 'react'
import {
	SubscriptionButton,
	SubscriptionContent,
	SubscriptionLight,
	SubscriptionWrapper
} from './SubscriptionStyles'
import { Heading, TextParagraph } from '../../styles/globalStyle'

const Subscription = () => {
	return (
		<SubscriptionWrapper>
			<SubscriptionContent>
				<SubscriptionLight>
					<svg
						width='24'
						height='25'
						viewBox='0 0 24 25'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M19.21 6.40874C18.17 4.29973 16.16 2.74308 13.83 2.23089C11.39 1.68857 8.88997 2.27106 6.97997 3.81767C5.05997 5.35424 3.96997 7.65406 3.96997 10.1146C3.96997 12.7157 5.51997 15.4373 7.85997 17.0141V17.8476C7.84997 18.1288 7.83997 18.5607 8.17997 18.9122C8.52997 19.2737 9.04997 19.3139 9.45997 19.3139H14.59C15.13 19.3139 15.54 19.1633 15.82 18.882C16.2 18.4904 16.19 17.9882 16.18 17.7171V17.0141C19.28 14.9151 21.23 10.4862 19.21 6.40874Z'
							fill='#FBCB18'
						/>
						<path
							d='M15.26 22.116C15.2 22.116 15.13 22.106 15.07 22.0859C13.06 21.5134 10.95 21.5134 8.93997 22.0859C8.56997 22.1863 8.17997 21.9754 8.07997 21.6038C7.96997 21.2322 8.18997 20.8405 8.55997 20.7401C10.82 20.0974 13.2 20.0974 15.46 20.7401C15.83 20.8506 16.05 21.2322 15.94 21.6038C15.84 21.9151 15.56 22.116 15.26 22.116Z'
							fill='#FBCB18'
						/>
					</svg>
				</SubscriptionLight>
				<Heading $mb='6px'>Thoughts Time</Heading>
				<TextParagraph>
					We don’t have any notice for you, till then you can share your
					thoughts with your peers.
				</TextParagraph>
				<SubscriptionButton>Write a message</SubscriptionButton>
			</SubscriptionContent>
		</SubscriptionWrapper>
	)
}

export default Subscription
