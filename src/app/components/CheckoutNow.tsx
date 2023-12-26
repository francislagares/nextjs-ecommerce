'use client';

import { useShoppingCart } from 'use-shopping-cart';

import { Button } from '@/components/ui/button';
import { ProductCart } from '@/models/product';

import { urlFor } from '../lib/sanity';

const CheckoutNow = ({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) => {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return (
    <Button
      variant='outline'
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      Checkout Now
    </Button>
  );
};

export default CheckoutNow;
