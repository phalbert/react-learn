import React from 'react'

export const Hello = ()=> {
    return (
        React.createElement(
            'div',
            null, 
            React.createElement('h1', null, 'Hello no JSX'))
    )
}