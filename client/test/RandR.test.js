
import { expect, jest, test } from '@jest/globals';
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Reviews from '../src/components/R&R/Reviews.jsx';
Enzyme.configure({ adapter: new Adapter() });
//client/test/RandR.test.js
describe("Ratings & Reviews", () => {
  test("First R&R test", () => {
    expect(true).toBe(true);
  });

  test("renders review component", () => {
    // render the component on virtual dom
    const wrapper = shallow(<Reviews />);
    expect(wrapper.exists()).toBe(true);

    });

});