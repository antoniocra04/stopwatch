import React from 'react'
import './styles/main.scss'

import { Stopwatch } from './components/Stopwatch'

const App: React.FC = () => {
    return (
        <div className="root">
            <Stopwatch />
        </div>
    )
}

export default App
