import { expect, jest, test } from '@jest/globals';
import '@testing-library/jest-dom';
import React from "react";
import {render, fireEvent, screen} from '@testing-library/react';
import { prodInfo, styles, style, avgRating, numReviews } from "./Overview.test.data.js";
import Overview from "../src/components/overview/Overview.jsx";
import ProductInfo from "../src/components/overview/components/ProductInfo.jsx";
import ImageGallery from "../src/components/overview/components/ImageGallery.jsx";
import ThumbnailCarousel from "../src/components/overview/components/ThumbnailCarousel.jsx";
import Thumbnail from "../src/components/overview/components/Thumbnail.jsx";
import ArrowButton from "../src/components/overview/components/ArrowButton.jsx";
import StyleSelector from "../src/components/overview/components/StyleSelector.jsx";
import StyleSelectorItem from "../src/components/overview/components/StyleSelectorItem.jsx";
import AddToCart from "../src/components/overview/components/AddToCart.jsx";
import ProductDesc from "../src/components/overview/components/ProductDesc.jsx";
import ProductFeat from "../src/components/overview/components/ProductFeat.jsx";
import ZoomView from "../src/components/overview/components/ZoomView.jsx";

Enzyme.configure({ adapter: new Adapter() });

/*describe("Overview Widget", () => {
  const minProps = {
    handleClick: () => {},
    productInfo: prodInfo,
    product_id: prodInfo.id,
    'avgRating': avgRating,
    'numReviews': numReviews,
    styles: styles,
  };
  const result = render(<Overview {...minProps} />);
  test("It renders", () => {
    expect(result.firstChild).toMatchSnapshot();
  });
  it('renders one <ProductInfo /> component', () => {
    console.log('test', result.container.querySelector(`[id="product-info"]`));
    expect(result.container.querySelector(`[id="product-info"]`)).toBeTruthy();
  });
  // it('renders one <ImageGallery /> component', () => {
  //   expect(wrapper.find(ImageGallery).length).toBe(1);
  // });
  // it('renders one <StyleSelector /> component', () => {
  //   expect(wrapper.find(StyleSelector).length).toBe(1);
  // });
  // it('renders one <AddToCart /> component', () => {
  //   expect(wrapper.find(AddToCart).length).toBe(1);
  // });
  // it('renders one <ProductDesc /> component', () => {
  //   expect(wrapper.find(ProductDesc).length).toBe(1);
  // });
  // it('renders one <ProductFeat /> component', () => {
  //   expect(wrapper.find(ProductFeat).length).toBe(1);
  // });
});
// describe("Product Info", () => {
//   const minProps = {
//     handleClick: '() -> {}',
//     productInfo: prodInfo,
//     'avgRating': avgRating,
//     'numReviews': numReviews,
//     style: style,
//   };
//   test("It renders", () => {
//     const wrapper = shallow(<ProductInfo {...minProps} />);
//     expect(wrapper.exists()).toBe(true);
//   });
//   const wrapper = shallow(<ProductInfo {...minProps} />);
//   test("It renders Product Category", () => {
//     expect(wrapper.find('.product-category').text()).toEqual(prodInfo.category);
//   });
//   test("It renders Product Name", () => {
//     expect(wrapper.find('.product-name').text()).toEqual(prodInfo.name);
//   });
//   test("It renders Product Price", () => {
//     expect(wrapper.find('.product-price').text()).toEqual(`$${prodInfo.default_price}`);
//   });
//   test("It renders Number of Reviews", () => {
//     expect(wrapper.find('.num-reviews').text()).toEqual(`(${numReviews})`);
//   });
//   test("It has the average rating.", () => {
//     //TODO: Update when we have star component
//     expect(avgRating).toEqual(avgRating);
//   });
// });
// describe("Image Gallery", () => {
//   const minProps = {
//     handleClick: '() -> {}',
//     photos: style.photos,
//   };
//   const wrapper = shallow(<ImageGallery {...minProps} />);
//   test("It renders", () => {
//     expect(wrapper.exists()).toBe(true);
//   });
//   it('renders one <ThumbnailCarousel /> component', () => {
//     expect(wrapper.find(ThumbnailCarousel).length).toBe(1);
//   });
//   it('renders two <ArrowButton /> components', () => {
//     expect(wrapper.find(ArrowButton).length).toBe(2);
//   });
//   it('renders one <ZoomView /> component', () => {
//     expect(wrapper.find(ZoomView).length).toBe(1);
//   });
//   it('renders one right arrow', () => {
//     const wrapper = shallow(<ImageGallery {...minProps}/>);
//     const minProps = {
//       handleClick: '() -> {}',
//       productInfo: prodInfo,
//       product_id: prodInfo.id,
//       'avgRating': avgRating,
//       'numReviews': numReviews,
//       styles: styles,
//     };
//     const overview_wrapper = shallow(<Overview {...minProps}/>);
//     console.log('***Image gallery arrow buttons: ', wrapper.find({direction: 'left'}).length);
//     const img_gal = overview_wrapper.find("ImageGallery").first().props();
//     console.log('photoIndex', img_gal);
//     expect(true).toBe(true);
//   })
//   describe("Thumbnail Gallery", () => {
//     const minProps = {
//       handleClick: '() -> {}',
//       photos: style.photos,
//     };
//     const wrapper = shallow(<ThumbnailCarousel {...minProps} />);
//     test("It renders", () => {
//       expect(wrapper.exists()).toBe(true);
//     });
//     it(`renders ${style.photos.length} <Thumbnail /> components`, () => {
//       expect(wrapper.find(Thumbnail).length).toBe(style.photos.length);
//     });
//     it('renders two <ArrowButton /> components', () => {
//       expect(wrapper.find(ArrowButton).length).toBe(2);
//     });
//     describe("Thumbnail", () => {
//       const minProps = {
//         photoUrl: style.photos[0].thumbnail_url,
//         //width,
//         i: 0,
//         //selected, handleClick
//       };
//       const wrapper = shallow(<Thumbnail {...minProps} />);
//       test("It renders", () => {
//         expect(wrapper.exists()).toBe(true);
//       });
//     });
//   });
//   describe("ArrowButton", () => {
//     const minProps = {
//     //  handleClick: '() -> {}',
//       direction: 'up',
//       active: 'true',
//       height: 450,
//       carousel_height: 300,
//      // handleEnter: '() -> {}',
//     //  handleLeave: '() -> {}',
//       expanded: false
//     };
//     const wrapper = shallow(<ArrowButton {...minProps} />);
//     test("It renders", () => {
//       expect(wrapper.exists()).toBe(true);
//     });
//   });
//   describe("ZoomView", () => {
//     const minProps = {
//     };
//     const wrapper = shallow(<ZoomView {...minProps} />);
//     test("It renders", () => {
//       expect(wrapper.exists()).toBe(true);
//     });
//   });
// });
// describe("StyleSelector", () => {
//   const minProps = {
//     handleClick: '() -> {}',
//     styles: styles,
//     style: style,
//   };
//   const wrapper = shallow(<StyleSelector {...minProps} />);
//   test("It renders", () => {
//     expect(wrapper.exists()).toBe(true);
//   });
//   it(`renders ${styles.length} <StyleSelectorItem /> components`, () => {
//     expect(wrapper.find(StyleSelectorItem).length).toBe(styles.length);
//   });
//   describe("StyleSelectorItem", () => {
//     const minProps = {
//       photo: style.photos[0].thumbnail_url,
//       selected: true,
//       //handleClick, index, height
//     };
//     const wrapper = shallow(<StyleSelectorItem {...minProps} />);
//     test("It renders", () => {
//       expect(wrapper.exists()).toBe(true);
//     });
//   });
// });
// describe("AddToCart", () => {
//   const minProps = {
//     handleClick: '() -> {}',
//     skus: style.skus,
//   };
//   const wrapper = shallow(<AddToCart {...minProps} />);
//   test("It renders", () => {
//     expect(wrapper.exists()).toBe(true);
//   });
// });
// describe("Product Description", () => {
//   const minProps = {
//     handleClick: '() -> {}',
//     productInfo: prodInfo
//   };
//   const wrapper = shallow(<ProductDesc {...minProps} />);
//   test("It renders", () => {
//     expect(wrapper.exists()).toBe(true);
//   });
// });
describe("Product Features", () => {
  const minProps = {
    handleClick: '() -> {}',
    features: prodInfo.features
  };
  // const wrapper = shallow(<ProductFeat {...minProps} />);
  // test("It renders", () => {
  //   expect(wrapper.exists()).toBe(true);
  // });
  test("It renders", () => {
  const container = render(<ProductFeat {...minProps}/>);
  expect(container.firstChild).toMatchSnapshot()
  });
});*/

/***** Enzyme Version ******/
describe("Overview Widget", () => {
  const minProps = {
    handleClick: '() -> {}',
    productInfo: prodInfo,
    product_id: prodInfo.id,
    'avgRating': avgRating,
    'numReviews': numReviews,
    styles: styles,
  };
  const wrapper = shallow(<Overview {...minProps} />);
  test("It renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('renders one <ProductInfo /> component', () => {
    expect(wrapper.find(ProductInfo).length).toBe(1);
  });
  it('renders one <ImageGallery /> component', () => {
    expect(wrapper.find(ImageGallery).length).toBe(1);
  });
  it('renders one <StyleSelector /> component', () => {
    expect(wrapper.find(StyleSelector).length).toBe(1);
  });
  it('renders one <AddToCart /> component', () => {
    expect(wrapper.find(AddToCart).length).toBe(1);
  });
  it('renders one <ProductDesc /> component', () => {
    expect(wrapper.find(ProductDesc).length).toBe(1);
  });
  it('renders one <ProductFeat /> component', () => {
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
  const wrapper = shallow(<ProductInfo {...minProps} />);
  test("It renders Product Category", () => {
    expect(wrapper.find('.product-category').text()).toEqual(prodInfo.category);
  });
  test("It renders Product Name", () => {
    expect(wrapper.find('.product-name').text()).toEqual(prodInfo.name);
  });
  test("It renders Product Price", () => {
    expect(wrapper.find('.product-price').text()).toEqual(`$${prodInfo.default_price}`);
  });
  test("It renders Number of Reviews", () => {
    expect(wrapper.find('.num-reviews').text()).toEqual(`(${numReviews})`);
  });
  test("It has the average rating.", () => {
    //TODO: Update when we have star component
    expect(avgRating).toEqual(avgRating);
  });
});
describe("Image Gallery", () => {
  const minProps = {
    handleClick: '() -> {}',
    photos: style.photos,
  };
  const wrapper = shallow(<ImageGallery {...minProps} />);
  test("It renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('renders one <ThumbnailCarousel /> component', () => {
    expect(wrapper.find(ThumbnailCarousel).length).toBe(1);
  });
  it('renders two <ArrowButton /> components', () => {
    expect(wrapper.find(ArrowButton).length).toBe(2);
  });
  it('renders one <ZoomView /> component', () => {
    expect(wrapper.find(ZoomView).length).toBe(1);
  });
  it('renders one right arrow', () => {
    const wrapper = shallow(<ImageGallery {...minProps}/>);
    console.log('state photoIndex', wrapper.props());
    // const minProps = {
    //   handleClick: '() -> {}',
    //   productInfo: prodInfo,
    //   product_id: prodInfo.id,
    //   'avgRating': avgRating,
    //   'numReviews': numReviews,
    //   styles: styles,
    // };
   // const overview_wrapper = mount(<Overview {...minProps}/>);
    console.log('***Image gallery arrow buttons: ', wrapper.find({direction: 'left'}).length);
    //const img_gal = overview_wrapper.find("ImageGallery").first().props();
    //console.log('photoIndex', img_gal);
    expect(true).toBe(true);
  })
  describe("Thumbnail Gallery", () => {
    const minProps = {
      handleClick: '() -> {}',
      photos: style.photos,
    };
    const wrapper = shallow(<ThumbnailCarousel {...minProps} />);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    it(`renders ${style.photos.length} <Thumbnail /> components`, () => {
      expect(wrapper.find(Thumbnail).length).toBe(style.photos.length);
    });
    it('renders two <ArrowButton /> components', () => {
      expect(wrapper.find(ArrowButton).length).toBe(2);
    });
    describe("Thumbnail", () => {
      const minProps = {
        photoUrl: style.photos[0].thumbnail_url,
        //width,
        i: 0,
        //selected, handleClick
      };
      const wrapper = shallow(<Thumbnail {...minProps} />);
      test("It renders", () => {
        expect(wrapper.exists()).toBe(true);
      });
    });
  });
  describe("ArrowButton", () => {
    const minProps = {
    //  handleClick: '() -> {}',
      direction: 'up',
      active: 'true',
      height: 450,
      carousel_height: 300,
     // handleEnter: '() -> {}',
    //  handleLeave: '() -> {}',
      expanded: false
    };
    const wrapper = shallow(<ArrowButton {...minProps} />);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
  describe("ZoomView", () => {
    const minProps = {
    };
    const wrapper = shallow(<ZoomView {...minProps} />);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
describe("StyleSelector", () => {
  const minProps = {
    handleClick: '() -> {}',
    styles: styles,
    style: style,
  };
  const wrapper = shallow(<StyleSelector {...minProps} />);
  test("It renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it(`renders ${styles.length} <StyleSelectorItem /> components`, () => {
    expect(wrapper.find(StyleSelectorItem).length).toBe(styles.length);
  });
  describe("StyleSelectorItem", () => {
    const minProps = {
      photo: style.photos[0].thumbnail_url,
      selected: true,
      //handleClick, index, height
    };
    const wrapper = shallow(<StyleSelectorItem {...minProps} />);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
describe("AddToCart", () => {
  const minProps = {
    handleClick: '() -> {}',
    skus: style.skus,
  };
  const wrapper = shallow(<AddToCart {...minProps} />);
  test("It renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
describe("Product Description", () => {
  const minProps = {
    handleClick: '() -> {}',
    productInfo: prodInfo
  };
  const wrapper = shallow(<ProductDesc {...minProps} />);
  test("It renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
describe("Product Features", () => {
  const minProps = {
    handleClick: '() -> {}',
    features: prodInfo.features
  };
  const wrapper = shallow(<ProductFeat {...minProps} />);
  test("It renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});