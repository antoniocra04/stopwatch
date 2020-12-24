import React from 'react'

interface IButton {
    icon: React.FC
    onClickEvent: React.MouseEventHandler
    color: string
    shadowColor: string
}

export const Button: React.FC<IButton> = (props) => {
    return (
        <button
            style={{
                backgroundColor: props.color,
                boxShadow: `0px 5px 10px ${props.shadowColor}`,
            }}
            onClick={props.onClickEvent}
            className="button"
        >
            <props.icon />
        </button>
    )
}
