import React from 'react'
import { MainHeading } from '../../styles/globalStyle'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { EventApi } from '@fullcalendar/core'
import { CalendarWrapper } from './CalendarStyles'

const Calendar = () => {
	const [currentEvents, setCurrentEvents] = React.useState<EventApi[]>([])

	const handleDateClick = (selected: any) => {
		const title = prompt('Please enter a new title for your event')
		const calendarApi = selected.view.calendar
		calendarApi.unselect()

		if (title) {
			calendarApi.addEvent({
				id: `${selected.dateStr}-${title}`,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay
			})
		}
	}

	const handleEventClick = (selected: any) => {
		if (
			window.confirm(
				`Are you sure want to delete the event ${selected.event.title}`
			)
		) {
			selected.event.remove()
		}
	}

	return (
		<CalendarWrapper>
			<FullCalendar
				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
				initialView={'dayGridMonth'}
				headerToolbar={{
					start: 'prev,next today',
					center: 'title',
					end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
				}}
				editable={true}
				selectable={true}
				selectMirror={true}
				dayMaxEvents={true}
				select={handleDateClick}
				eventClick={handleEventClick}
				eventsSet={events => setCurrentEvents(events)}
				initialEvents={[
					{ id: '1234', title: 'All-day event', date: '2023-09-15' }
				]}
				height={'90vh'}
			/>
		</CalendarWrapper>
	)
}

export default Calendar
