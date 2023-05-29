import App from "./App"
import React from "react"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

test('Renders without crashing', ()=>{
    //hi!
    let x = 10;
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
})