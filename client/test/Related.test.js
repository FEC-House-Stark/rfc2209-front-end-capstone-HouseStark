import { expect, jest, test } from '@jest/globals';
import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Related from '../src/components/Related/Related.jsx';
import OutfitList from '../src/components/Related/Related.jsx';
import ProductList from '../src/components/Related/ProductList.jsx';
import ProductCards from '../src/components/Related/ProductCards.jsx';
import OutfitCards from '../src/components/Related/OutfitCards.jsx';
import ComparisonModal from '../src/components/Related/ComparisonModal.jsx';
import { testingData } from "./Related.test.data.js";

Enzyme.configure({ adapter: new Adapter() });

describe("Related Products", () => {
  test("Renders Related", () => {
    shallow(<Related />);
  });
  test("Renders Related with data", () => {
    shallow(<Related data={[testingData]} />);
  });
  test("Renders Related", () => {
    const wrapper = shallow(<Related data={[testingData]} />);
    expect(wrapper.find('Container')).toHaveLength(1)
  });

});

describe("ProductList", () => {
  test("Renders ProductList", () => {
    shallow(<ProductList />);
  });
  test("Renders Header", () => {
    const wrapper = shallow(<ProductList />);
    expect(wrapper.find('ProdHeader')).toHaveLength(1)
  });
  test("Renders Header text", () => {
    const wrapper = shallow(<ProductList />);
    expect(wrapper.find('ProdHeader').text()).toEqual('RELATED PRODUCTS')
  });
  test("Renders Header NextButton", () => {
    const wrapper = shallow(<ProductList />);
    expect(wrapper.find('NextButton')).toEqual(false)
  });

});

describe("OutfitList", () => {
  test("Renders OutfitList", () => {
    shallow(<OutfitList />);
  });
});

describe("ProductCards", () => {
  test("Renders ProductCards", () => {
    shallow(<ProductCards data={testingData} />);
  });
  test("Renders three ProductCards", () => {
    const wrapper = shallow(<ProductCards data={[testingData, testingData, testingData]} />);
    expect(wrapper.find('Card')).toHaveLength(3)
  });
  test("Renders Star", () => {
    const wrapper = shallow(<ProductCards data={[testingData]} />);
    expect(wrapper.find('Star')).toHaveLength(1)
  });

});

describe("OutfitCards", () => {
  test("Renders OutfitCards", () => {
    shallow(<OutfitCards />);
  });
});

describe("ComparisonModal", () => {
  test("Renders ComparisonModal", () => {
    shallow(<ComparisonModal compare={{ name: 'name' }} currentProduct={{ name: 'name' }} />);
  });
});
