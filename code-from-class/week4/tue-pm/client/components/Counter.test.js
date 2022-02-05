import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Counter from './Counter'

test('when the Counter component is rendered, the count state should start at 0', () => {
  render(<Counter />)

  const p = screen.getByText(/Ange and Jinny/i)

  expect(p.textContent).toMatch(/: 0/i)
})

test('when clicking the increase button, the paragraph text should be incremented', () => {
  render(<Counter />)
  const button = screen.getByRole('button', { name: 'Click here to increase the steps!' })

  userEvent.click(button)

  const p = screen.getByText(/Ange and Jinny/i) // locate the <p> tag using the text contents

  expect(p.textContent).toMatch(/: 1/i) // get the contents and assert
})

test('when clicking the increase button, the textbox should also be incremented', () => {
  render(<Counter />)
  const button = screen.getByRole('button', { name: 'Click here to increase the steps!' })

  userEvent.click(button)

  const textbox = screen.getByRole('textbox')
  expect(textbox.value).toBe('1')
})

test('when typing in the textbox, the number in the paragraph should change', () => {
  render(<Counter />)
  const textbox = screen.getByRole('textbox')

  userEvent.type(textbox, '999')

  const p = screen.getByText(/Ange and Jinny/i)
  expect(p.textContent).toMatch(/: 999/i)
})
