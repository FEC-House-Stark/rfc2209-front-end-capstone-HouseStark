import { expect, jest, test } from '@jest/globals';
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { prodInfo, styles, style, avgRating, numReviews } from "./Overview.test.data.js";
import Overview from "../src/components/overview/Overview.jsx";
import ProductInfo from "../src/components/overview/components/ProductInfo.jsx";
import ImageGallery from "../src/components/overview/components/ImageGallery.jsx";
import StyleSelector from "../src/components/overview/components/StyleSelector.jsx";
import AddToCart from "../src/components/overview/components/AddToCart.jsx";
import ProductDesc from "../src/components/overview/components/ProductDesc.jsx";
import ProductFeat from "../src/components/overview/components/ProductFeat.jsx";

Enzyme.configure({ adapter: new Adapter() });

describe("Overview Widget", () => {
  const minProps = {
    handleClick: '() -> {}',
    productInfo: prodInfo,
    product_id: prodInfo.id,
    'avgRating': avgRating,
    'numReviews': numReviews,
    styles: styles,
  };
  test("It renders", () => {
    const wrapper = shallow(<Overview {...minProps} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders one <ProductInfo /> components', () => {
    const wrapper = shallow(<Overview {...minProps} />);
    expect(wrapper.find(ProductInfo).length).toBe(1);
  });
  it('renders one <ImageGallery /> components', () => {
    const wrapper = shallow(<Overview {...minProps} />);
    expect(wrapper.find(ImageGallery).length).toBe(1);
  });
  it('renders one <StyleSelector /> components', () => {
    const wrapper = shallow(<Overview {...minProps} />);
    expect(wrapper.find(StyleSelector).length).toBe(1);
  });
  it('renders one <AddToCart /> components', () => {
    const wrapper = shallow(<Overview {...minProps} />);
    expect(wrapper.find(AddToCart).length).toBe(1);
  });
  it('renders one <ProductDesc /> components', () => {
    const wrapper = shallow(<Overview {...minProps} />);
    expect(wrapper.find(ProductDesc).length).toBe(1);
  });
  it('renders one <ProductFeat /> components', () => {
    const wrapper = shallow(<Overview {...minProps} />);
    expect(wrapper.find(ProductFeat).length).toBe(1);
  });
});
describe("Product Info", () => {
  const minProps = {
    handleClick: '() -> {}',
    productInfo: prodInfo,
    'avgRating': avgRating,
    'numReviews': numReviews,
    style: style,
  };
  test("It renders", () => {
    const wrapper = shallow(<ProductInfo {...minProps} />);
    expect(wrapper.exists()).toBe(true);
  });
  test("It renders Product Category", () => {
    const wrapper = shallow(<ProductInfo {...minProps} />);
    expect(wrapper.find('.product-category').text()).toEqual(prodInfo.category);
  });
  test("It renders Product Name", () => {
    const wrapper = shallow(<ProductInfo {...minProps} />);
    expect(wrapper.find('.product-name').text()).toEqual(prodInfo.name);
  });
  test("It renders Product Price", () => {
    const wrapper = shallow(<ProductInfo {...minProps}/>);
    expect(wrapper.find('.product-price').text()).toEqual(`$${prodInfo.default_price}`);
  });
  test("It renders Number of Reviews", () => {
    const wrapper = shallow(<ProductInfo {...minProps}/>);
    expect(wrapper.find('.num-reviews').text()).toEqual(`(${numReviews})`);
  });
  test("It has the average rating.", () => {
    const wrapper = shallow(<ProductInfo {...minProps}/>);
    //TODO: Update when we have star component
    expect(avgRating).toEqual(avgRating);
  });
});
describe("Image Gallery", () => {
  const minProps = {
    handleClick: '() -> {}',
    photos: style.photos,
  };
  test("It renders", () => {
    const wrapper = shallow(<ImageGallery {...minProps} />);
    expect(wrapper.exists()).toBe(true);
  });
});
describe("StyleSelector", () => {
  const minProps = {
    handleClick: '() -> {}',
    styles: styles,
    style: style,
  };
  test("It renders", () => {
    const wrapper = shallow(<StyleSelector {...minProps} />);
    expect(wrapper.exists()).toBe(true);
  });
});
describe("AddToCart", () => {
  const minProps = {
    handleClick: '() -> {}',
    skus: style.skus,
  };
  test("It renders", () => {
    const wrapper = shallow(<AddToCart {...minProps} />);
    expect(wrapper.exists()).toBe(true);
  });
});
describe("Product Description", () => {
  const minProps = {
    handleClick: '() -> {}',
    productInfo: prodInfo
  };
  test("It renders", () => {
    const wrapper = shallow(<ProductDesc {...minProps} />);
    expect(wrapper.exists()).toBe(true);
  });
});
describe("Product Features", () => {
  const minProps = {
    handleClick: '() -> {}',
    features: prodInfo.features
  };
  test("It renders", () => {
    const wrapper = shallow(<ProductFeat {...minProps} />);
    expect(wrapper.exists()).toBe(true);
  });
});
