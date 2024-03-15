import { render, screen, fireEvent } from '@testing-library/react';
import HW from './components/Hw';
import InputField from './components/inputField/InputField';
import TextAreaField from './components/textAreaField/TextAreaField';
import React from 'react';
import app from './App';
import '@testing-library/jest-dom';
import App from './App';

const mockedOnChange = jest.fn();
//!App component
describe('App component', () => {
  it('should contain the hw component', () => {
    render(<App />);
    const hwElement = screen.getByRole('form');
    expect(hwElement).toBeInTheDocument();
  });
});
//!Hw component
describe('testing the hw component', () => {
  it('should render a header ', () => {
    render(<HW />);
    const headerElement = screen.getByRole('heading');
    expect(headerElement).toBeInTheDocument();
  });
  it('should render a form element ', () => {
    render(<HW />);
    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();
  });
  it('should render HW component with two input fields and TextAreaField', () => {
    render(<HW />);

    const nameInput = screen.getByPlaceholderText(/Name/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const textArea = screen.getByLabelText(/Message/i);
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(textArea).toBeInTheDocument();
    expect(nameInput.ariaRequired);
  });
  it('should check if the inputs are required', () => {
    render(<HW />);

    const nameInput = screen.getByPlaceholderText(/Name/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const textArea = screen.getByLabelText(/Message/i);

    expect(nameInput).toHaveAttribute('required');
    expect(emailInput).toHaveAttribute('required');
    expect(textArea).toHaveAttribute('required');
  });

  it('should render a submit button in the hw component', () => {
    render(<HW />);

    const nameInput = screen.getByRole('button', { type: 'submit' });
    expect(nameInput).toBeInTheDocument();
  });
});

//!inputfield.component
describe('testing the input field component', () => {
  it('should render a label field with the correct label', () => {
    render(<InputField label='name' />);
    const labelElement = screen.getByRole('textbox', { for: 'name' });
    expect(labelElement).toBeInTheDocument();
  });
  it('should render an input field with the correct label', () => {
    render(<InputField label='name' />);
    const inputElement = screen.getByRole('textbox', { id: 'name' });
    expect(inputElement).toBeInTheDocument();
  });
  it('should be able to type in to the inputfield ', async () => {
    render(<InputField label='name' onChange={mockedOnChange} />);
    const inputElement = screen.getByRole('textbox', { id: 'name' });
    fireEvent.change(inputElement, { target: { value: 'testing' } });
    expect(inputElement.value).toBe('testing');
  });
  it('should be able to type in to the textareafield ', async () => {
    render(<TextAreaField label='name' onChange={mockedOnChange} />);
    const inputElement = screen.getByRole('textbox', { id: 'name' });
    fireEvent.change(inputElement, { target: { value: 'testing' } });
    expect(inputElement.value).toBe('testing');
  });
});

//!textareafield component
describe('testing the textareafield component', () => {
  it('should render a label field with the correct label', () => {
    render(<TextAreaField label='name' />);
    const labelElement = screen.getByRole('textbox', { for: 'name' });
    expect(labelElement).toBeInTheDocument();
  });
  it('should render a textarea field', () => {
    render(<TextAreaField label='name' />);
    const labelElement = screen.getByRole('textbox', { id: 'name' });
    expect(labelElement).toBeInTheDocument();
  });
});