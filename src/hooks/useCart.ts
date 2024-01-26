import {Cart} from '../services/Cart/Cart';
import {useCartContext} from '../services/Cart/implementations/Context/CartContext';

export function useCart(): Cart {
  return useCartContext();
}
