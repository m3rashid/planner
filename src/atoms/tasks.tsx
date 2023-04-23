import { atom } from 'recoil'

export interface IItem {
	id: string
	title: string
	description?: string
	color?: string
	from: string
	to: string
}

const defaultItems: IItem[] = [
	{
		from: '00:06:00 2023-04-24',
		to: '00:09:00 2023-04-24',
		title: 'The task 1',
		description: 'This is a task 1',
		color: '#c74848',
		id: '2023-04-23T20:42.948Z',
	},
	{
		from: '00:06:00 2023-04-24',
		to: '00:09:00 2023-04-24',
		title: 'The task 2 this is this is this is',
		description: 'This is a task',
		color: '#c74848',
		id: '2023-04-23T20:49.948Z',
	},
	{
		from: '00:06:00 2023-04-24',
		to: '00:09:00 2023-04-24',
		title: 'The task',
		description:
			'This is a task this This is a task thisThis is a task thisThis is a task thisThis is a task thisThis is a task thisThis is a task thisThis is a task thisThis is a task thisThis is a task thisThis is a task thisThis is a task thisThis is a task this',
		color: '#c74848',
		id: '2023-04-23T20:49:428Z',
	},
]

const itemsAtom = atom<IItem[]>({
	key: 'itemsAtom',
	default: defaultItems,
})

export default itemsAtom

/**
 * {
    "from": "2023-04-24 00:06:00",
    "to": "2023-04-24 00:09:00",
    "title": "The task",
    "description": "This is a task",
    "labelColor": "#c74848",
    "id": "2023-04-23T20:49:42.948Z"
}
 */
