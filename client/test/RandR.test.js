import { expect, jest, test } from '@jest/globals';
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Reviews from '../src/components/R&R/Reviews.jsx';
import Breakdown from '../src/components/R&R/Breakdown.jsx';
import StarRating from '../src/components/R&R/StarRating.jsx';
import FileUpload from '../src/components/R&R/FileUpload.jsx';
import { characteristics, fullReviewList, filterObj } from "./RandR.test.data.js";
Enzyme.configure({ adapter: new Adapter() });
//client/test/RandR.test.js
describe("Ratings & Reviews", () => {
  test("First R&R test", () => {
    expect(true).toBe(true);
  });

  test("renders review component", () => {
    // render the component on virtual dom
    const wrapper = shallow(<Reviews characteristics/>);
    expect(wrapper.exists()).toBe(true);

    });

    test("renders breakdown component", () => {
      // render the component on virtual dom
      const wrapper = shallow(<Breakdown fullReviewList filterObj/>);
      expect(wrapper.exists()).toBe(true);

      });

      test("renders StarRating component", () => {
        // render the component on virtual dom
        const wrapper = shallow(<StarRating />);
        expect(wrapper.exists()).toBe(true);

        });

        test("renders FileUpload component", () => {
          // render the component on virtual dom
          const wrapper = shallow(<FileUpload />);
          expect(wrapper.exists()).toBe(true);

          });
});