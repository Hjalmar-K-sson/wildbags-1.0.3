import { IconButton } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';

const CartIcon = () => {
  return (
    <IconButton
      icon={<FiShoppingCart />}
      fontSize={'1.5rem'}
      background={'blackAlpha.900'}
      color={'whiteAlpha.900'}
      _hover={{
        background: 'whiteAlpha.900',
        color: 'blackAlpha.900',
        border: '1px solid black'
      }}
      aria-label={'shopping-cart'}
    />
  );
};

export default CartIcon;
