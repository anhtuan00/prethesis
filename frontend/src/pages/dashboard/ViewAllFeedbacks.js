// import { UserFeedbackContainer, SearchContainer } from "../../components";

// const ViewAllFeedbacks = () => {
//   return (
//     <>
//       <UserFeedbacksSearchContainer />
//       <UserFeedbacksContainer />
//     </>
//   );
// };

// export default ViewAllFeedbacks;

import React from "react";

const ViewAllFeedbacks = () => {
  return <div>ViewAllFeedbacks</div>;
};

export default ViewAllFeedbacks;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ViewAllFeedbacks = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("http://svcy3.myclass.vn/api/Product");
//         setProducts(res.data.content);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   // console.log(products);
//   return (
//     <ul>
//       {products.map((product) => (
//         <li key={product.id}>
//           <h2>{product.name}</h2>
//           <p>ID: {product.id}</p>
//           <p>Alias: {product.alias}</p>
//           <p>Price: {product.price}</p>
//           <p>Description: {product.description}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ViewAllFeedbacks;
