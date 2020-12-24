import { useState, useRef } from 'react'

const useTimer = (initialstate = 0) => {
    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const intervalRef = useRef(null)

    const handleStart = () => {
        setIsActive(true)
        setIsPaused(false)
        intervalRef.current = setInterval(() => {
            setTimer((timer) => timer + 10)
        }, 10)
    }

    const handlePause = () => {
        clearInterval(intervalRef.current)
        setIsPaused(true)
    }

    const handleResume = () => {
        setIsPaused(false)
        // setTimer((timer) => timer + 1)
        intervalRef.current = setInterval(() => {
            setTimer((timer) => timer + 10)
        }, 10)
    }

    const handleReset = () => {
        clearInterval(intervalRef.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)
    }

    return {
        timer,
        isActive,
        isPaused,
        handleStart,
        handlePause,
        handleResume,
        handleReset,
    }
}

export default useTimer
