import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Library from '../../components/library'

describe('Life', () => {
    beforeAll(() => {
        console.log('所有測試前執行')
    })

    beforeEach(() => {
        console.log('每次執行測試前執行')
    })

    afterEach(() => {
        console.log('每次執行測試後執行')
    })

    afterAll(() => {
        console.log('所有測試後執行')
    })

    test('check render', () => {
        const { getByTestId } = render(<Library />)
        expect(getByTestId('span')).toBeInTheDocument()
    })
})
