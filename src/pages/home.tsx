import { Card, Timeline, Typography } from 'antd'
import { IItem } from 'atoms/tasks'
import AddTaskForm from 'components/addTask'
import React from 'react'

interface IProps {
	items: IItem[]
}

const Home: React.FC<IProps> = ({ items }) => {
	return (
		<div>
			<AddTaskForm />

			<br />
			<br />
			<br />

			<Timeline mode='left'>
				{items.map(item => {
					return (
						<Timeline.Item>
							<Card
								title={item.title}
								bodyStyle={{ padding: 10 }}
								className='shadow-md'
								headStyle={{ borderColor: item.color }}
								style={{ borderColor: item.color }}
							>
								{item.description && <Typography.Text>{item.description}</Typography.Text>}
							</Card>
						</Timeline.Item>
					)
				})}
			</Timeline>
		</div>
	)
}

export default Home
