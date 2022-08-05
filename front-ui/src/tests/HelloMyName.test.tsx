import { render, screen } from '@testing-library/react'
import HelloMyName, { getUppercaseName } from '../HelloMyName'

test('Render HelloMyName correctly', () => {
  const { asFragment } = render(<HelloMyName />)

  expect(asFragment()).toMatchSnapshot()
})

test('Should be name correctly (uppercase)', () => {
  const name = 'user name'
  render(<HelloMyName name={name} />)

  const expectedName = 'User name'
  expect(getUppercaseName(name)).toBe(expectedName)

  const nameElm = screen.queryByText(expectedName)
  expect(nameElm).toBeInTheDocument()
})

test('Should be name correctly (default name)', () => {
  render(<HelloMyName />)

  const expectedName = 'Nobody'
  const nameElm = screen.queryByText(expectedName)
  expect(nameElm).toBeInTheDocument()
})
