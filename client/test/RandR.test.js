import { expect, jest, test } from '@jest/globals';
import renderer from 'react-test-renderer';
import { render, cleanup, screen } from "@testing-library/react";
import Reviews from '../src/components/R&R/Reviews.jsx';
import axios from 'axios';

//client/test/RandR.test.js
describe("Ratings & Reviews", () => {
  test("First R&R test", () => {
    expect(true).toBe(true);
  });

  test("shows more reviews", () => {
    // render the component on virtual dom
    render(<Reviews />);

    //select the elements you want to interact with
    const incrementBtn = screen.getByTestId("increment");

    //interact with those elements
    fireEvent.click(incrementBtn);
    // fireEvent.click(incrementBtn);

    //assert the expected result
    expect(incrementBtn).toBeInTheDocument()
    });

});
//test block