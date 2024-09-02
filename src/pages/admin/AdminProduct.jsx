import React from 'react'
import { TablePagination } from "./component/TablePagination"
import { ApprovedProductsData } from './component/ApprovedProductsData';
import { PendingProductsData } from './component/PendingProductsData';

export default function AdminProduct() {
  const [approvedCurrentPage, setApprovedCurrentPage] = React.useState(1);
  const [pendingCurrentPage, setPendingCurrentPage] = React.useState(1);

  const itemsPerPage = 6; // Define how many items you want per page

  const approvedTotalPages = Math.ceil(ApprovedProductsData.length / itemsPerPage);
  const pendingTotalPages = Math.ceil(PendingProductsData.length / itemsPerPage);

  const approvedCurrentData = ApprovedProductsData.slice(
    (approvedCurrentPage - 1) * itemsPerPage,
    approvedCurrentPage * itemsPerPage
  );

  const pendingCurrentData = PendingProductsData.slice(
    (pendingCurrentPage - 1) * itemsPerPage,
    pendingCurrentPage * itemsPerPage
  );

  return (
    <div className="font-poppins">
      <h1 className="text-[#555657] font-semibold text-2xl leading-[48px] mb-5">PRODUCTS PAGE</h1>

      {/* Accepted order section */}
      <section className="p-4 bg-white rounded-[10px] lg:w-[700px] w-fit mb-5">
        <h2 className="font-semibold text-Green text-xl">Accepted order</h2>
        <table className="table-auto border-collapse my-2 mx-2 w-full">
          <thead>
            <tr className="text-sm font-medium bg-Green text-white rounded-xl justify-around">
              <th className="px-2 py-3">Product name</th>
              <th className="px-2 py-3">Category</th>
              <th className="px-2 py-3">Price</th>
              <th className="px-2 py-3">In stock</th>
              <th className="px-2 py-3">Sold</th>
              <th className="px-2 py-3">Vendor</th>
              <th className="px-2 py-3"></th>
            </tr>
          </thead>
          <tbody className="font-medium text-xs text-[#555657] divide-y divide-[#E5E7EB]">
          {approvedCurrentData.map((item, index) => (
            <tr key={index}>
              <td className="flex gap-1 py-3">
                <img src={item.imgSrc} alt={`Image of ${item.name}`} className="w-[50px]" />
                <p className='self-center'>{item.name}</p>
              </td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>{item.sold}</td>
              <td>{item.vendor}</td>
              <td>
                <button className="transition duration-300 ease-in-out transform hover:scale-105 text-Green">
                  View
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        <TablePagination
        currentPage={approvedCurrentPage}
        setCurrentPage={setApprovedCurrentPage}
        totalPages={approvedTotalPages}
      />
      </section>

      {/* Pending Products Section */}
      <section className="p-4 bg-white rounded-[10px] lg:w-[700px] w-fit mb-5">
        <h2 className="font-semibold text-[#F18805] text-xl">Pending Products</h2>
        <table className="table-auto border-collapse my-2 mx-2 w-full">
          <thead>
            <tr className="text-sm font-medium bg-Green text-white rounded-xl justify-around">
              <th className="px-2 py-3">Product name</th>
              <th className="px-2 py-3">Category</th>
              <th className="px-2 py-3">Price</th>
              <th className="px-2 py-3">In stock</th>
              <th className="px-2 py-3">Vendor</th>
              <th className="px-2 py-3"></th>
            </tr>
          </thead>
          <tbody className="font-medium text-xs text-[#555657] divide-y divide-[#E5E7EB]">
          {pendingCurrentData.map((item, index) => (
            <tr key={index}>
              <td className="inline-flex gap-1">
                <img src={item.imgSrc} alt={`Image of ${item.name}`} className="w-[50px]" />
                <p className='self-center'>{item.name}</p>
              </td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>{item.vendor}</td>
              <td className='flex gap-1.5 py-3 px-2'>
                <button className='text-white bg-Green rounded p-[7px] transition duration-300 ease-in-out transform hover:scale-105'>Accept</button>
                <button className='text-white bg-[#960200] rounded p-[7px]  transition duration-300 ease-in-out transform hover:scale-105'>Deny</button>
              </td>
              <td>
                <button className="transition duration-300 ease-in-out transform hover:scale-105 text-Green">
                  View
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        <TablePagination
        currentPage={pendingCurrentPage}
        setCurrentPage={setPendingCurrentPage}
        totalPages={pendingTotalPages}
      />
      </section>
    </div>
  )
}
