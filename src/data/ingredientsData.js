/**
 * Ingredients data for the custom pizza builder.
 * Each ingredient has an id, name, price (INR), and image path.
 */
import pepperoni from '../public/assets/toppins/Pepperoni.png';
import mushroom from '../public/assets/toppins/Mushroom.png';
import blackOlive from '../public/assets/toppins/Black_Olive.png';
import capsicum from '../public/assets/toppins/Capsicum.png';
import jalapeno from '../public/assets/toppins/Jalapeno.png';
import chicken from '../public/assets/toppins/Chicken.png';
import onion from '../public/assets/toppins/Onion.png';
import tomato from '../public/assets/toppins/Tomato.png';
import redChilliFlakes from '../public/assets/toppins/Red_Chilli_Flakes.png';
import paneer from '../public/assets/toppins/Paneer.png';
import sweetCorn from '../public/assets/toppins/Sweet_Corn.png';
const ingredientsData = [
  {
    id: 'pepperoni',
    name: 'Pepperoni',
    price: 110,
    image: pepperoni,
  },
  {
    id: 'mushroom',
    name: 'Mushroom',
    price: 28,
    image: mushroom,
  },
  {
    id: 'black-beans',
    name: 'Black beans',
    price: 48,
    image: blackOlive,
  },
  {
    id: 'black-olive',
    name: 'Black olive',
    price: 0,
    image: blackOlive,
  },
  {
    id: 'green-olive',
    name: 'Green olive',
    price: 50,
    image: onion,
  },
  {
    id: 'jalapeno',
    name: 'Jalapeno',
    price: 48,
    image: jalapeno,
  },
  {
    id: 'chicken',
    name: 'Chicken',
    price: 60,
    image: chicken,
  },
  {
    id: 'tomato',
    name: 'Tomato',
    price: 20,
    image: tomato,
  },
  {
    id: 'red-paprika',
    name: 'Red paprika',
    price: 50,
    image: redChilliFlakes,
  },
  {
    id: 'paneer',
    name: 'Paneer',
    price: 45,
    image: paneer,
  },
  {
    id: 'fried-onion',
    name: 'Fried Onion',
    price: 18,
    image: onion,
  },
  {
    id: 'capsicum',
    name: 'Capsicum',
    price: 18,
    image: capsicum,
  },
  {
    id: 'sweet-corn',
    name: 'Sweet corn',
    price: 28,
    image: sweetCorn,
  },
];

export default ingredientsData;
