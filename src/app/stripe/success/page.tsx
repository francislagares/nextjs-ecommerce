import { CheckCheck } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const stripeSuccess = () => {
  return (
    <div className='h-screen'>
      <div className='mx-auto mt-32 md:max-w-[50vw]'>
        <CheckCheck className='mx-auto my-6 h-16 w-16 text-green-600' />
        <div className='text-center'>
          <h3 className='text-center text-base font-semibold text-gray-900 md:text-2xl'>
            Payment Done!
          </h3>
          <p className='my-2 text-gray-600'>
            Thank you for you pruchase We hope you enjoy it
          </p>
          <p>Have a great day!</p>

          <Button asChild className='mt-5'>
            <Link href='/'>GO back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default stripeSuccess;
