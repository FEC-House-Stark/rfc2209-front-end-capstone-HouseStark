import { expect, jest, test } from '@jest/globals';
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ProductInfo from "../src/components/overview/components/ProductInfo.jsx";

const prodInfo = {
  "id": 66644,
  "campus": "hr-rfc",
  "name": "Morning Joggers",
  "slogan": "Make yourself a morning person",
  "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
  "category": "Pants",
  "default_price": "40.00",
  "created_at": "2022-03-31T21:13:15.875Z",
  "updated_at": "2022-03-31T21:13:15.875Z",
  "features": [
      {
          "feature": "Fabric",
          "value": "100% Cotton"
      },
      {
          "feature": "Cut",
          "value": "Skinny"
      }
  ]
};
const avgRating = 3.53;
const numReviews = 26;
const style = {
  "style_id": 411544,
  "name": "Black",
  "original_price": "40.00",
  "sale_price": null,
  "default?": true,
  "photos": [
    {
      "thumbnail_url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    },
    {
      "thumbnail_url": "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    },
    {
      "thumbnail_url": "https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    },
    {
      "thumbnail_url": "https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    },
    {
      "thumbnail_url": "https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80"
    },
    {
      "thumbnail_url": "https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    }
  ],
  "skus": {
    "2390393": {
      "quantity": 8,
      "size": "XS"
    },
    "2390394": {
      "quantity": 16,
      "size": "S"
    },
    "2390395": {
      "quantity": 17,
      "size": "M"
    },
    "2390396": {
      "quantity": 10,
      "size": "L"
    },
    "2390397": {
      "quantity": 15,
      "size": "XL"
    },
    "2390398": {
      "quantity": 6,
      "size": "XXL"
    }
  }
};

Enzyme.configure({ adapter: new Adapter() });
describe("Overview Widget", () => {
  describe("Product Info", () => {
    test("It renders", () => {
      const wrapper = shallow(<ProductInfo
        handleClick={() => { }}
        productInfo={prodInfo}
        avgRating={avgRating}
        numReviews={numReviews}
        style={style}
      />);
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders Product Category", () => {
      const wrapper = shallow(<ProductInfo
        handleClick={() => { }}
        productInfo={prodInfo}
        avgRating={avgRating}
        numReviews={numReviews}
        style={style}
      />);
      expect(wrapper.find('.product-category').text()).toEqual(prodInfo.category);
    });

  });
});