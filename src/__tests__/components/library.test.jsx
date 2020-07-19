import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Library from '../../components/library'

describe('Library', () => {

    test('check render', () => {
        const { getByTestId } = render(<Library />)
        expect(getByTestId('span')).toBeInTheDocument()
    })

    test('check span text is 0', () => {
        const { getByTestId } = render(<Library />)
        expect(getByTestId('span').textContent).toBe('0')
    })

    test('click button, span text is 1', () => {
        const { getByText, getByTestId } = render(<Library />)
        const Button = getByText('點我')
        fireEvent.click(Button)
        expect(getByTestId('span').textContent).toBe('1')
    })

    test('click button, span text is 2', () => {
        const { getByText, getByTestId } = render(<Library />)
        const Button = getByText('點我')
        fireEvent.click(Button)
        fireEvent.click(Button)
        expect(getByTestId('span').textContent).toBe('2')
    })
})
