import { XCircle } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const ErrorStripe = () => {
  return (
    <div className='h-screen'>
      <div className='mx-auto mt-32 md:max-w-[50vw]'>
        <XCircle className='mx-auto my-6 h-16 w-16 text-red-600' />
        <div className='text-center'>
          <h2 className='text-center text-base font-semibold text-gray-900 md:text-2xl'>
            Something went wrong!
          </h2>
          <p className='my-2 text-gray-600'>Sorry for the inconvenience.</p>
          <p>Go back and try something different...</p>

          <Button asChild className='mt-5'>
            <Link href='/'>GO back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorStripe;
