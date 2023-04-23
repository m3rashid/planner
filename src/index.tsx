import React from 'react'
import { RecoilRoot } from 'recoil'
import ReactDOM from 'react-dom/client'

import App from 'app'
import 'index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</React.StrictMode>
)
