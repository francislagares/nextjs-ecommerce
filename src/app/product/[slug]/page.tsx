import { Star, Truck } from 'lucide-react';

import ImageGallery from '@/app/components/ImageGallery';
import { client } from '@/app/lib/sanity';
import { Button } from '@/components/ui/button';
import { ProductDetail } from '@/models/product';

const getData = async (slug: string) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
    _id,
      images,
      price,
      name,
      description,
      "slug": slug.current,
      "categoryName": category->name,
      price_id
  }`;

  const data = await client.fetch(query);

  return data;
};

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const data: ProductDetail = await getData(params.slug);

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='grid gap-8 md:grid-cols-2'>
          <ImageGallery images={data.images} />

          <div className='md:py-8'>
            <div className='mb-2 md:mb-3'>
              <span className='mb-0.5 inline-block text-gray-500'>
                {data.categoryName}
              </span>
              <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>
                {data.name}
              </h2>
            </div>

            <div className='mb-6 flex items-center gap-3 md:mb-10'>
              <Button className='gap-x-2 rounded-full'>
                <span className='text-sm'>4.2</span>
                <Star className='h-5 w-5' />
              </Button>

              <span className='text-sm text-gray-500 transition duration-100'>
                56 Ratings
              </span>
            </div>

            <div className='mb-4'>
              <div className='flex items-end gap-2'>
                <span className='text-xl font-bold text-gray-800 md:text-2xl'>
                  ${data.price}
                </span>
                <span className='mb-0.5 text-red-500 line-through'>
                  ${data.price + 30}
                </span>
              </div>

              <span className='text-sm text-gray-500'>
                Incl. Vat plus shipping
              </span>
            </div>

            <div className='mb-6 flex items-center gap-2 text-gray-500'>
              <Truck className='h-6 w-6' />
              <span className='text-sm'>2-4 Day Shipping</span>
            </div>

            <p className='mt-12 text-base tracking-wide text-gray-500'>
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;