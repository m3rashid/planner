import { Button, Form, Input, Modal, TimePicker, message } from 'antd'
import itemsAtom from 'atoms/tasks'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'

const AddTaskForm = () => {
	const [open, setOpen] = useState(false)
	const setItems = useSetRecoilState(itemsAtom)

	const openModal = () => setOpen(true)
	const closeModal = () => setOpen(false)

	const handleAddTask = (values: any) => {
		const fromDay = dayjs(values.duration[0]).format('DD')
		const toDay = dayjs(values.duration[1]).format('DD')

		if (fromDay !== toDay) {
			return message.error('Task duration cannot be more than 24 hours')
		}

		setItems((oldItems: any) => [
			...oldItems,
			{
				from: dayjs(values.duration[0]).format('YYYY-MM-DD HH:mm:ss'),
				to: dayjs(values.duration[1]).format('YYYY-MM-DD HH:mm:ss'),
				title: values.title,
				description: values.description,
				color: values.color,
				id: new Date(),
			},
		])
		closeModal()
	}

	return (
		<>
			<Modal title='Add Task' open={open} onCancel={closeModal} footer={null}>
				<Form onFinish={handleAddTask} labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
					<Form.Item
						label='Task Name'
						name='title'
						rules={[
							{
								required: true,
								message: 'Please enter a task name',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label='Duration'
						name='duration'
						rules={[
							{
								required: true,
								message: 'Please select a duration',
							},
						]}
					>
						<TimePicker.RangePicker showSecond={false} />
					</Form.Item>

					<Form.Item label='Description' name='description'>
						<Input.TextArea />
					</Form.Item>

					<Form.Item
						label='Color'
						name='color'
						rules={[
							{
								required: true,
								message: 'Color is required',
							},
						]}
					>
						<Input type='color' defaultValue='blue' />
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 6, span: 16 }}>
						<Button type='primary' htmlType='submit' className='mr-2'>
							Add Task
						</Button>
						<Button onClick={closeModal}>Cancel</Button>
					</Form.Item>
				</Form>
			</Modal>

			<Button onClick={openModal}>Add Task</Button>
		</>
	)
}

export default AddTaskForm
