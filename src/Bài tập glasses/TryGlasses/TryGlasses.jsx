import React, { Component } from 'react'
import Face from './Face'
import HeaderGlasses from './HeaderGlasses'

export default class TryGlasses extends Component {
    render() {
        return (
            <div>
                <HeaderGlasses />
                <Face />
            </div>
        )
    }
}
