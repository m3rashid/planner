import React from 'react'
import Home from 'pages/home'
import { Layout, Menu } from 'antd'
import { useRecoilValue } from 'recoil'
import itemsAtom from 'atoms/tasks'
import dayjs from 'dayjs'

const App = () => {
	const items = useRecoilValue(itemsAtom)

	const dayWiseItems = items.reduce((acc: any, curr: any) => {
		const day = dayjs(curr.from).format('DD-MM-YYYY')
		if (acc[day]) {
			return { ...acc, [day]: [...acc[day], curr] }
		}
		return { ...acc, [day]: [curr] }
	}, {})

	console.log({ dayWiseItems })

	const handleDateClick = (day: string) => {
		console.log(day)
		console.log(dayWiseItems[day])
	}

	return (
		<Layout>
			<Layout.Content className='p-4 flex justify-center gap-4 overflow-hidden'>
				{/* make a sidebar */}

				<div className='shadow-md rounded-md bg-white w-44 p-2 h-full'>
					<Menu mode='inline' defaultSelectedKeys={['1']}>
						{Object.keys(dayWiseItems).map(day => (
							<Menu.Item key={day} onClick={() => handleDateClick(day)}>
								{day}
							</Menu.Item>
						))}
					</Menu>
				</div>

				<div
					className='bg-white rounded-md shadow-md p-6 max-w-[650px] overflow-y-auto'
					style={{ height: 'calc(100vh - 32px)', maxHeight: 'calc(100vh - 32px)' }}
				>
					<Home items={items} />
				</div>
			</Layout.Content>
		</Layout>
	)
}

export default App
