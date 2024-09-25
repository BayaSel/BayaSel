// import React from "react";
// import stalion from "./images/stalion.png";
// import beans from "./images/beans.png";
// import brama from "./images/brama.png";
// import guinea from "./images/guinea.png";
// import "../Styles/home.css";

// const products = [
//   {
//     name: "GOLDEN STALION - LONG GRAIN...",
//     rating: 0,
//     reviews: [],
//     price: 850.0,
//     originalPrice: 950.0,
//     image: stalion,
//     link: "#",
//   },
//   {
//     name: "BEANS - OLOYIN (honey) - 4 Ltrs...",
//     rating: 0,
//     reviews: [],
//     price: 850.0,
//     originalPrice: 950.0,
//     image: beans,
//     link: "#",
//   },
//   {
//     name: "BRAMA - Piranhas - DOCTOR...",
//     rating: 0,
//     reviews: [],
//     price: 850.0,
//     originalPrice: 950.0,
//     image: brama,
//     link: "#",
//   },
//   {
//     name: "GUINEA FOWL - size 2",
//     rating: 0,
//     reviews: [],
//     price: 850.0,
//     originalPrice: 950.0,
//     image: guinea,
//     link: "#",
//   },
// ];

// const Recommended = () => {
//   return (
//     <div className="recommended-products container mx-auto p-4">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-bold">Recommended Products</h2>
//         <a
//           href="#"
//           className="flex items-center text-green-600 py-1 px-3 rounded"
//         >
//           See All <span className="ml-1">&gt;</span>
//         </a>
//       </div>

//       {/* Grid to display products */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="product-card rounded  flex flex-col items-start hover:shadow-lg transition-shadow w-full"
//           >
//             {/* Product image */}
//             <img
//               src={product.image}
//               alt={product.name}
//               className="product-image w-full  mb-4 rounded"
//             />

//             {/* Product name */}
//             <h3
//               className="text-sm mb-2"
//               style={{
//                 maxWidth: "100%",
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//                 whiteSpace: "nowrap",
//               }}
//             >
//               {product.name}
//             </h3>

//             {/* Product rating and reviews */}
//             <div className="flex items-center text-green-600 mb-2 text-sm text-left">
//               <span className="mr-1">
//                 {"★".repeat(Math.round(product.rating))}
//                 {"☆".repeat(5 - Math.round(product.rating))}
//               </span>
//               <span className="text-gray-600">
//                 ({product.reviews.length} Reviews)
//               </span>
//             </div>

//             {/* Product price */}
//             <p className="text-left text-xl font-bold text-sm  mb-1">
//               ${product.price.toFixed(2)}
//               <span className="original-price text-sm line-through text-gray-500 ml-2">
//                 ${product.originalPrice.toFixed(2)}
//               </span>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Recommended;
