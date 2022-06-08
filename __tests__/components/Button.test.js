import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../../src/components/Button'
import { render, fireEvent } from '@testing-library/react-native'

describe('Button:', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Button />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should onPress fire correctly', () => {
    const onEventMock = jest.fn()
    const { getByText } = render(
      <Button title={'Button'} onPress={onEventMock} />,
    )
    fireEvent.press(getByText('Button'))
    expect(onEventMock).toHaveBeenCalled()
  })

})

