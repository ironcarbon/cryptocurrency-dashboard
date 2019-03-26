import React from 'react';
import { AppContext } from '../App/AppProvider';

export default function ({ firstVisit }) {
    return (
        <AppContext.Consumer>
            {({ firstVisit }) => {
                return firstVisit ? <div>
                    Welcome to CryptoDash, please select your favorite coins to begin.{' '}
                </div> : null
            }}
        </AppContext.Consumer>
    )

}

