import { expect, jest, test } from '@jest/globals';
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Related from '../src/components/Related/Related.jsx';
import OutfitList from '../src/components/Related/Related.jsx';
import ProductList from '../src/components/Related/Related.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe("Related Products", () => {
  // const related = {
  //   id: "66646",
  //   category: "Kicks",
  //   name: "Heir Force Ones",
  //   price: "99.00",
  //   features: []
  // };
  // const thumbnails = {
  //   thumbnail_url: "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  // }
  // const ratings = {
  //   avg: 3.86,
  //   totalReviews: 40
  // }
  test("Renders Related", () => {
    const wrapper = shallow(<Related />);
    expect(wrapper.exists()).toBe(true);
  });
  test("Renders ProductList", () => {
    const wrapper = shallow(<ProductList />);
    expect(wrapper.exists()).toBe(true);
  });
  test("Renders OutfitList", () => {
    const wrapper = shallow(<OutfitList />);
    expect(wrapper.exists()).toBe(true);
  });
});