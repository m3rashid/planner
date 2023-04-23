import React from 'react'
import { Layout } from 'antd'

interface IProps extends React.PropsWithChildren {
	sidebar: React.ReactNode
}

const AppLayout: React.FC<IProps> = ({ children, sidebar }) => {
	return (
		<Layout>
			<Layout.Content className='p-4 flex justify-center'>
				{sidebar}
				<div
					className='bg-white overflow-y-auto rounded-md shadow-md p-6 max-w-[600px]'
					style={{ minHeight: 'calc(100vh - 32px)' }}
				>
					{children}
				</div>
			</Layout.Content>
		</Layout>
	)
}

export default AppLayout
