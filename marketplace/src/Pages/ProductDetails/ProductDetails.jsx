// /* eslint-disable jsx-a11y/no-redundant-roles */
// import { StarIcon } from '@heroicons/react/20/solid'
// import Header from '../../Components/Header/Header'
// import { useStateValue } from '../../StateProvider'
// import Footer from "../../Components/Footer/Footer"
// const product = {
//   name: 'Solar Panel',
//   price: 'Rs 9,749.00',
//   href: '#',
//   breadcrumbs: [
//     { id: 1, name: 'Home >', href: '#' },
//   ],
//   images: [
//     {
//       src: 'https://kenbrooksolar.com/wp-content/uploads/2020/09/100-Watt-Solar-Panel-500x500.jpg',
//       alt: 'Two each of gray, white, and black shirts laying flat.',
//     },

//   ],

//   description:
//     'UTL Solar Panel 100 Watt 12V High Efficiency Poly Crystalline Cell (Set Of 2).',
//   features: [
//     'Excellent power generation even in low light irradiation',
//     '2 mm toughened textured glass for front protection.',
//     'Highly efficient solar panels with more than 18% efficiency.',
//     'Available in various power ratings with 36/72 cells.',
//     'Superior performance in all atmospheres.',
//     'Anodized aluminium alloy frame for protection.',
//   ],
//   details:
//     'This is the best solar panel to be installed on an existing single battery inverter for home. It is cost effective way to produce your own solar power and you will be able to power the small devices that you connect to this panel.UTL 100 watt solar panel is one of the top rated solar panel with high quality ‘A’ grade solar cells and ultra clear tempered glasses that doesn’t break easily. It has the ability to perform efficiently even in and cloudy weather. UTL 100 watt 12V solar PV module comes with an IP 65-rated front-side junction box.Choosing UTL’s 100 watt solar panel is best for you. There are traditional solar cells is used in solar panel that are made of silicon. Solar cells can be poly-crystalline (from multiple sources).',
// }
// const reviews = { href: '#', average: 4, totalCount: 117 }

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function ProductDetails() {
//   const [{ basket }, dispatch] = useStateValue();
//   const addToBasket = () => {
//     // dispatch the item into the data layer
//     dispatch({
//       type: "ADD_TO_BASKET",

//     });
//   };

//   return (
//     <>
//       <Header />
//       <div className="bg-black mt-0">
//         <div className="pt-6">
//           <nav aria-label="Breadcrumb">
//             <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//               {product.breadcrumbs.map((breadcrumb) => (
//                 <li key={breadcrumb.id}>
//                   <div className="flex items-center">
//                     <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-white">
//                       {breadcrumb.name}
//                     </a>
//                   </div>
//                 </li>
//               ))}
//               <li className="text-sm">
//                 <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-white-600">
//                   {product.name}
//                 </a>
//               </li>
//             </ol>
//           </nav>

//           {/* Image gallery */}
//           <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
//             <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
//               <img
//                 src={product.images[0].src}
//                 alt={product.images[0].alt}
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>

//           </div>

//           {/* Product info */}
//           <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
//             <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
//               <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{product.name}</h1>
//             </div>

//             {/* Options */}
//             <div className="mt-4 lg:row-span-3 lg:mt-0">
//               <h2 className="sr-only">Product information</h2>
//               <p className="text-3xl tracking-tight text-white">{product.price}</p>

//               {/* Reviews */}
//               <div className="mt-6">
//                 <h3 className="sr-only">Reviews</h3>
//                 <div className="flex items-center">
//                   <div className="flex items-center">
//                     {[0, 1, 2, 3, 4].map((rating) => (
//                       <StarIcon
//                         key={rating}
//                         className={classNames(
//                           reviews.average > rating ? 'text-white' : 'text-white-200',
//                           'h-5 w-5 flex-shrink-0'
//                         )}
//                         aria-hidden="true"
//                       />
//                     ))}
//                   </div>
//                   <p className="sr-only">{reviews.average} out of 5 stars</p>
//                   <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
//                     {reviews.totalCount} reviews
//                   </a>
//                 </div>
//               </div>

//               <form className="mt-10">

//                 <button onClick={(e) => {
//                   e.preventDefault();
//                   addToBasket()
//                 }}

//                   className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 >
//                   Add to Cart
//                 </button>
//               </form>
//             </div>

//             <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-white-200 lg:pb-16 lg:pr-8 lg:pt-6">
//               {/* Description and details */}
//               <div>
//                 <h3 className="sr-only">Description</h3>

//                 <div className="space-y-6">
//                   <p className="text-base text-white">{product.description}</p>
//                 </div>
//               </div>

//               <div className="mt-10">
//                 <h3 className="text-sm font-medium text-white">features</h3>

//                 <div className="mt-4">
//                   <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
//                     {product.features.map((highlight) => (
//                       <li key={highlight} className="text-white">
//                         <span className="text-white">{highlight}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               <div className="mt-10">
//                 <h2 className="text-sm font-medium bold text-white">Details</h2>

//                 <div className="mt-4 space-y-6">
//                   <p className="text-sm text-white">{product.details}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="ml-20">
//           <div className="px-2  sm:px-0">
//             <h3 className="text-base font-bold leading-7 text-white">Product Specification</h3>
//           </div>
//           <div className="mt-6 border-t border-white-100">
//             <dl className="divide-y divide-white-100">
//               <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//                 <dt className="text-sm font-medium leading-6 text-white">Solar Panel Rating</dt>
//                 <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">100 Watt</dd>
//               </div>
//               <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//                 <dt className="text-sm font-medium leading-6 text-white">Panel Type</dt>
//                 <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">Polycrystalline</dd>
//               </div>
//               <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//                 <dt className="text-sm font-medium leading-6 text-white">Short circuit current</dt>
//                 <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">6.3 ampere</dd>
//               </div>
//               <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//                 <dt className="text-sm font-medium leading-6 text-white">Operating voltage at Pmax VMP</dt>
//                 <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">	17.9 volt</dd>
//               </div>
//               <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//                 <dt className="text-sm font-medium leading-6 text-white">Operating current Imp</dt>
//                 <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">	5.7 ampere</dd>
//               </div>
//               <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//                 <dt className="text-sm font-medium leading-6 text-white">Open circuit voltage VOC</dt>
//                 <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">21.6 volt</dd>
//               </div>
//               <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//                 <dt className="text-sm font-medium leading-6 text-white">Module efficiency</dt>
//                 <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0"> 15 %</dd>
//               </div>
//               <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//                 <dt className="text-sm font-medium leading-6 text-white">Operating temperature</dt>
//                 <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">-40 °C to 80 °C</dd>
//               </div>
//               <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//                 <dt className="text-sm font-medium leading-6 text-white">Maximum system voltage</dt>
//                 <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">100 V</dd>
//               </div>
//               <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//                 <dt className="text-sm font-medium leading-6 text-white">Open circuit voltage VOC</dt>
//                 <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">21.6 volt</dd>
//               </div>

//             </dl>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }
