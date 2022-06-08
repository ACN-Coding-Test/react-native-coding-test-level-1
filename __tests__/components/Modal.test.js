import React from 'react'
import renderer from 'react-test-renderer'
import Modal from '../../src/components/Modal'

describe('Modal:', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<Modal />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})

