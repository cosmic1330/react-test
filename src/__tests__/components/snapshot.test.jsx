import React from 'react'
import { create, act } from 'react-test-renderer'
import Library from '../../components/library'

describe('snapshot', () => {
    test('it shows the expected text when clicked', () => {
        let component
        act(() => {
            component = create(<Library />)
        })
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
        const instance = component.root

        const button = instance.findByType('button')
        const span = instance.findByType('span')
        act(() => button.props.onClick())
        tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
