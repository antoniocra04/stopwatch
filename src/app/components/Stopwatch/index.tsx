import React, { useState } from 'react'
import '../../styles/countdown.scss'

import { TimerRoundDisplay } from '../TimerRoundDisplay'
import useTimer from '../../hooks/useTimer'
import { Button } from '../Button'
import { Play } from '../icons/Play'
import { Stop } from '../icons/Stop'
import { Pause } from '../icons/Pause'

export const Stopwatch: React.FC = () => {
    const {
        timer,
        isActive,
        isPaused,
        handleStart,
        handlePause,
        handleResume,
        handleReset,
    } = useTimer()

    const handlePlayOrReset = () => {
        isActive ? handleReset() : handleStart()
    }

    const handlePauseOrResume = () => {
        isPaused ? handleResume() : handlePause()
    }

    return (
        <>
            <TimerRoundDisplay
                isAnimationActive={isActive}
                isAnimationPaused={isPaused}
                time={timer}
            />
            <div className="countdown__buttons-container">
                <Button
                    icon={isActive ? Stop : Play}
                    onClickEvent={handlePlayOrReset}
                    shadowColor={
                        isActive
                            ? 'rgba(255, 61, 61, 0.61)'
                            : 'rgba(61, 113, 255, 0.54)'
                    }
                    color={isActive ? '#FF3D3D' : '#3D71FF'}
                />
                {isActive ? (
                    <Button
                        icon={isPaused ? Play : Pause}
                        onClickEvent={handlePauseOrResume}
                        shadowColor={'rgba(255, 201, 61, 1)'}
                        color={'#FFC93D'}
                    />
                ) : (
                    ''
                )}
            </div>
        </>
    )
}
