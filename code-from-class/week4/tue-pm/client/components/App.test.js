import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import App from './App'

test('when user clicks crazy button, it should change the className to crazy', () => {
  render(<App />)

  const button = screen.getByRole('button', { name: 'Click here for crazy mode' })
  const main = screen.getByRole('main')
  userEvent.click(button)

  expect(main.className).toBe('crazy')
})

test('when the page is loaded, an img should not be displayed', () => {
  render(<App />)

  const img = screen.queryByRole('img')

  expect(img).toBeNull()
})

test('when the user clicks crazy button mode, an img should be displayed', () => {
  render(<App />)

  const button = screen.getByRole('button', { name: 'Click here for crazy mode' })
  userEvent.click(button)
  const img = screen.queryByRole('img')
  expect(img.src).toMatch(/dabbing-vector-cartoon-vector/i)
})

test('when the user clicks crazy button mode then clicks on the normal mode button, the img should not be displayed', () => {
  render(<App />)

  // we can match by an exact string
  const crazyButton = screen.getByRole('button', { name: 'Click here for crazy mode' })
  userEvent.click(crazyButton)

  // but here we match by a partial string using Regex. The 'i' means case insensitive
  const normalButton = screen.getByRole('button', { name: /normal/i })
  userEvent.click(normalButton)

  const img = screen.queryByRole('img')
  expect(img).toBeNull()
})
