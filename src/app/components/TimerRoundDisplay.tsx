import React from 'react'
import '../styles/timerRoundDisplay.scss'

interface ITimerRoundDisplay {
    time: number
    isAnimationPaused: boolean
    isAnimationActive: boolean
}

export const TimerRoundDisplay: React.FC<ITimerRoundDisplay> = (props) => {
    const roundRef = React.useRef<HTMLDivElement>()
    const spinerRef = React.useRef<HTMLDivElement>()

    const stopAnimation = () => {
        roundRef.current.style.animationPlayState = 'paused'
        spinerRef.current.style.boxShadow = 'none'
    }

    const startAnimation = () => {
        roundRef.current.style.animationPlayState = 'running'
        spinerRef.current.style.boxShadow = '-4px 0px 5px #FFC93D'
    }

    React.useEffect(() => {
        if (props.isAnimationPaused) {
            stopAnimation()
        } else {
            startAnimation()
        }
    }, [props.isAnimationPaused])

    React.useEffect(() => {
        if (props.isAnimationActive) {
            roundRef.current.style.animation =
                'linear 1s infinite rotate-animation'
            startAnimation()
        } else {
            stopAnimation()
            roundRef.current.style.animation = 'none'
        }
    }, [props.isAnimationActive])

    return (
        <div className="timer-round-display__container">
            <div className="timer-round-display__main-round">
                <div className="timer-round-display__spiner-round-container">
                    <div
                        ref={roundRef}
                        className="timer-round-display__spiner-round"
                    >
                        <div
                            ref={spinerRef}
                            className="timer-round-display__spiner"
                        ></div>
                    </div>
                    <div className="timer-round-display__round-with-text">
                        <div className="timer-round-display__text-container">
                            <p className="timer-round-display__time-text">
                                {Math.trunc(props.time / 1000)}.
                                {(props.time % 1000) / 10 < 10 ? 0 : ''}
                                {(props.time % 1000) / 10}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
