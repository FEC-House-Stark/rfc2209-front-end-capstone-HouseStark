import { expect, jest, test } from '@jest/globals';
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ProductInfo from "../src/components/overview/components/ProductInfo.jsx";
import ImageGallery from "../src/components/overview/components/ImageGallery.jsx";
import StyleSelector from "../src/components/overview/components/StyleSelector.jsx";
import AddToCart from "../src/components/overview/components/AddToCart.jsx";
import ProductDesc from "../src/components/overview/components/ProductDesc.jsx";
import ProductFeat from "../src/components/overview/components/ProductFeat.jsx";

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
const styles = [
  {
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
  },
  {
      "style_id": 411545,
      "name": "Grey",
      "original_price": "40.00",
      "sale_price": null,
      "default?": false,
      "photos": [
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=965&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          }
      ],
      "skus": {
          "2390399": {
              "quantity": 8,
              "size": "XS"
          },
          "2390400": {
              "quantity": 16,
              "size": "S"
          },
          "2390401": {
              "quantity": 17,
              "size": "M"
          },
          "2390402": {
              "quantity": 10,
              "size": "L"
          },
          "2390403": {
              "quantity": 15,
              "size": "XL"
          },
          "2390404": {
              "quantity": 6,
              "size": "XXL"
          }
      }
  },
  {
      "style_id": 411546,
      "name": "Goldenrod",
      "original_price": "40.00",
      "sale_price": "35.00",
      "default?": false,
      "photos": [
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
          }
      ],
      "skus": {
          "2390405": {
              "quantity": 8,
              "size": "XS"
          },
          "2390406": {
              "quantity": 16,
              "size": "S"
          },
          "2390407": {
              "quantity": 17,
              "size": "M"
          },
          "2390408": {
              "quantity": 10,
              "size": "L"
          },
          "2390409": {
              "quantity": 15,
              "size": "XL"
          },
          "2390410": {
              "quantity": 6,
              "size": "XXL"
          }
      }
  },
  {
      "style_id": 411547,
      "name": "Maroon",
      "original_price": "40.00",
      "sale_price": "35.00",
      "default?": false,
      "photos": [
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1549540806-76ce9007b674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1549540806-76ce9007b674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1541214880206-03318856c6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1541214880206-03318856c6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          }
      ],
      "skus": {
          "2390411": {
              "quantity": 8,
              "size": "XS"
          },
          "2390412": {
              "quantity": 16,
              "size": "S"
          },
          "2390413": {
              "quantity": 17,
              "size": "M"
          },
          "2390414": {
              "quantity": 10,
              "size": "L"
          },
          "2390415": {
              "quantity": 15,
              "size": "XL"
          },
          "2390416": {
              "quantity": 6,
              "size": "XXL"
          }
      }
  },
  {
      "style_id": 411548,
      "name": "Chartreuse",
      "original_price": "40.00",
      "sale_price": "25.00",
      "default?": false,
      "photos": [
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
          }
      ],
      "skus": {
          "2390417": {
              "quantity": 8,
              "size": "XS"
          },
          "2390418": {
              "quantity": 16,
              "size": "S"
          },
          "2390419": {
              "quantity": 17,
              "size": "M"
          },
          "2390420": {
              "quantity": 10,
              "size": "L"
          },
          "2390421": {
              "quantity": 15,
              "size": "XL"
          },
          "2390422": {
              "quantity": 6,
              "size": "XXL"
          }
      }
  },
  {
      "style_id": 411549,
      "name": "White",
      "original_price": "40.00",
      "sale_price": null,
      "default?": false,
      "photos": [
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1510217167326-549ae78e4738?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1510217167326-549ae78e4738?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
          }
      ],
      "skus": {
          "2390423": {
              "quantity": 8,
              "size": "XS"
          },
          "2390424": {
              "quantity": 16,
              "size": "S"
          },
          "2390425": {
              "quantity": 17,
              "size": "M"
          },
          "2390426": {
              "quantity": 10,
              "size": "L"
          },
          "2390427": {
              "quantity": 15,
              "size": "XL"
          },
          "2390428": {
              "quantity": 6,
              "size": "XXL"
          }
      }
  }
];

const style = styles[0];

Enzyme.configure({ adapter: new Adapter() });

describe("Overview Widget", () => {
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
});