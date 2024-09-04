import  { useState } from 'react';
import AdminProductTable from './AdminProductTable';
import AdminProductDetails from './AdminProductDetails'

export default function TableComponent() {
  const [viewDetail, setViewDetail] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewClick = (product) => {
    setSelectedProduct(product);
    setViewDetail(true);
  };

  const handleBackClick = () => {
    setViewDetail(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      {viewDetail ? (
        <AdminProductDetails product={selectedProduct} onBackClick={handleBackClick} />
      ) : (
        <AdminProductTable onViewClick={handleViewClick} />
      )}
    </div>
  );
}
