import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency ,addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [selectedSize, setSelectedSize] = useState(null);
  

  useEffect(() => {
    const item = products.find((item) => item._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
    }
  }, [productId, products]);

  if (!productData) {
    return <div className="text-center py-20 text-gray-400">Loading product...</div>;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* -------- Product Images -------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="Main product" />
          </div>
        </div>

        {/* -------- Product Info -------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} className="w-3.5" alt="star" />
            ))}
            <img src={assets.star_dull_icon} className="w-3.5" alt="star" />
            <p className="pl-2">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>

          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

          {/* -------- Size Selector (From productData.sizes) -------- */}
          <div className="flex flex-col gap-4 my-8">
            <p className="font-semibold">Available Sizes</p>
            <div className="flex gap-2 flex-wrap">
              {Array.isArray(productData.sizes) && productData.sizes.length > 0 ? (
                productData.sizes.map((size, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedSize(size)}
                    className={`border py-2 px-4 rounded transition-colors duration-200 ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'bg-gray-100 text-black border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))
              ) : (
                <p className="text-sm text-gray-400">No sizes available.</p>
              )}
            </div>
            {selectedSize && (
              <p className="text-sm text-gray-600">
                Selected size: <strong>{selectedSize}</strong>
              </p>
            )}
          </div>
            <button onClick={()=>addToCart(productData._id,selectedSize)}className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>
              ADD TO CART
        </button>
        <hr className='mt-8 sm:w-4/5'/>
        <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original product.</p>
              <p>Cash on Delivery is Available </p>
              <p>Easy return and exchange policy within 5 days</p>

        </div>
        </div>
      
      </div>

      {/* {DEscription and review } */}

      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
              <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
        </div>
              <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                <p>i need to display description here</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas modi, eaque animi placeat dicta non? Dolores et quis dolore sint consectetur reprehenderit necessitatibus eos? Consectetur nobis quis atque molestiae quos.</p>            
              </div>
      </div>

              {/* display related products */}

                  <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  );
};

export default Product;
