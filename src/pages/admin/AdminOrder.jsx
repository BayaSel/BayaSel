import  { useState } from 'react';
import AdminOrderList from './AdminOrderList';
import AdminOrderDetails from './AdminOrderDetails'

export default function TableComponent() {
  const [viewDetail, setViewDetail] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewClick = (order) => {
    setSelectedOrder(order);
    setViewDetail(true);
  };

  const handleBackClick = () => {
    setViewDetail(false);
    setSelectedOrder(null);
  };

  return (
    <div>
      {viewDetail ? (
        <AdminOrderDetails order={selectedOrder} onBackClick={handleBackClick} />
      ) : (
        <AdminOrderList onViewClick={handleViewClick} />
      )}
    </div>
  );
}
