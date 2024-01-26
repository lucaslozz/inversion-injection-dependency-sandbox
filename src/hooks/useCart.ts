import {Cart} from '../services/Cart/Cart';
// import {useCartContext} from '../services/Cart/implementations/context/CartContext';
import {useCartRedux} from '../services/Cart/implementations/redux/store';

export function useCart(): Cart {
  return useCartRedux();
  // useCartContext();
}
