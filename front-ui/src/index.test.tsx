import { render } from '@testing-library/react'
import App from './App'

test('Render App correctly', () => {
  const { asFragment } = render(<App />)

  expect(asFragment()).toMatchSnapshot()
})
