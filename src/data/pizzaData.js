/**
 * Pizza menu data for the Pizzeria app.
 * Each pizza object contains details like name, description, price (INR),
 * type (veg/non-veg), ingredients, and available toppings.
 */
import pizzaImage from '../public/assets/toppins/Pizza_Base.png';
const pizzaData = [
  {
    id: 'paneer-tikka',
    name: 'Paneer Tikka',
    description:
      'This is popular Italian pizza flavoured with marinated tikka and paneer',
    price: 290,
    image: pizzaImage,
    type: 'veg',
    ingredients: [
      'dough',
      'flour',
      'pizza sauce',
      'pizza sauce seasoning',
      'cheese',
    ],
    toppings: [
      'Paneer',
      'Fried Onion',
      'Sweet corn',
      'olive',
      'Capsicum',
      'Red paprika',
    ],
  },
  {
    id: 'chicken-italiaona',
    name: 'Chicken Italiaona',
    description:
      'This is popular Italian pizza flavoured with light sugary taste and creamy touch',
    price: 360,
    image: pizzaImage,
    type: 'non-veg',
    ingredients: [
      'deep dish pizza',
      'mix pizza sauce',
      'pizza sauce seasoning',
      'cheese',
      'sugar and cinnamon blend',
      'plain butter',
    ],
    toppings: [
      'Pepperoni',
      'Chicken',
      'Sausage',
      'Mushroom',
      'Capsicum',
      'Black beans',
    ],
  },
  {
    id: 'veggie-supreme',
    name: 'Veggie Supreme',
    description:
      'This is popular Italian pizza flavoured with creamed garlic with multiple herbs topped up with sweet corn',
    price: 310,
    image: pizzaImage,
    type: 'veg',
    ingredients: [
      'deep dish pizza',
      'mix pizza sauce',
      'pizza sauce seasoning',
      'cheese',
      'garlic',
      'herbs',
      'flavored butter',
    ],
    toppings: [
      'Fried Onion',
      'Sweet corn',
      'Mushroom',
      'Capsicum',
      'Black olive',
    ],
  },
  {
    id: 'tripple-chicken-feast',
    name: 'Tripple Chicken Feast',
    description:
      'This is popular Italian pizza flavoured with unique Greek dressing topped up with keema and meat ball',
    price: 400,
    image: pizzaImage,
    type: 'non-veg',
    ingredients: [
      'low carb pizza dough',
      'pizza sauce',
      'pizza sauce seasoning',
      'cheese',
      'greek dressing',
      'cajun',
    ],
    toppings: [
      'Chicken',
      'keema',
      'Fried Onion',
      'Chicken',
      'Meat ball',
      'Capsicum',
      'Sweet corn',
    ],
  },
  {
    id: 'ultimate-chicken',
    name: 'Ultimate Chicken',
    description:
      'This is popular Italian pizza flavoured with black cubed flavored butter. A top spongy base which gives unique taste with multiple toppings',
    price: 625,
    image: pizzaImage,
    type: 'non-veg',
    ingredients: [
      'deep dish pizza',
      'mix pizza sauce',
      'pizza sauce seasoning',
      'cheese',
      'bbq sauce',
      'cajun',
      'flavored butter',
    ],
    toppings: [
      'Pepperoni',
      'Fried Onion',
      'Chicken',
      'Meat ball',
      'Chicken',
      'Sausage',
      'Chicken',
    ],
  },
  {
    id: 'triangle-chicken-feast',
    name: 'Triangle Chicken Feast',
    description:
      'This is popular Italian pizza flavoured with unique Greek dressing topped up with keema and meat ball',
    price: 400,
    image: pizzaImage,
    type: 'non-veg',
    ingredients: [
      'low carb pizza dough',
      'pizza sauce',
      'pizza sauce seasoning',
      'cheese',
      'greek dressing',
      'cajun',
    ],
    toppings: [
      'Chicken',
      'keema',
      'Fried Onion',
      'Chicken',
      'Meat ball',
      'Capsicum',
      'Sweet corn',
    ],
  },
];

export default pizzaData;
