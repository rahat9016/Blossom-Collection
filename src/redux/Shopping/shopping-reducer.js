import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "This is the COOLEST Cube Ever",
      description:
        "This cube will keep you busy the entire day and it is very fun to play with",
      price: 15.0,
      image:
        "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Large Coffee Cup",
      description:
        "Get a big cup of coffee every morning before the day starts",
      price: 20.0,
      image:
        "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Books That CHANGED My Life",
      description:
        "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
      price: 150.0,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
    },
    {
      id: 4,
      title: "LOOK by crewcuts Girls' Ponte Pant",
      description:
        "75% Polyester, 21% Viscose, 4% Elastan e Imported Machine Wash Rule recess in these super comfy Ponte knit pants that pair well with any top for a fun look",
      price: 150.0,
      image:
        "https://i.ibb.co/ZdCFZ4t/women-skirt.jpg",
    },
    {
      id: 5,
      title: "White Embroidered Cotton Panjabi",
      description:
        "75% Polyester, 21% Viscose, 4% Elastan e Imported Machine Wash Rule recess in these super comfy Ponte knit pants that pair well with any top for a fun look",
      price: 150.0,
      image:
        "https://i.ibb.co/x3M1d58/white-panjabi-font.jpg",
    },
    {
      id: 6,
      title: "Lucky Brand Girls' Graphic Tee",
      description:
        "Perfect for any occasion whether it's playing at the beach, sunning by a pool, our simple every day wear you can be sure that your child will be comfortable wearing, as well as always being fashionable",
      price: 120.0,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61MTfxayhJL._AC_UX522_.jpg",
    },
    {
      id: 7,
      title: "Calvin Klein Big Girls' Performance Crop Top Tee Shirt",
      description:
        "Features Calvin Klein Performance tees and tank are offered in various styles, solids and or prints for your workout or everyday wear. This Girls Performance short sleeve crop top tee-shirt features small hole mesh, screenprint logo on front & back hem",
      price: 450.0,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91PWBBZjv2L._AC_UX466_.jpg",
    },
    {
      id: 8,
      title: "The Children's Place Baby Girls' Skinny Jeans",
      description:
        "Made of 80% cotton/18% polyester/2% spandex denim in our Blues wash. Specially treated for soft feel and hand-sanding for cool, lived-in look",
      price: 450.0,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/716XqHi3pSL._AC_UX569_.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
