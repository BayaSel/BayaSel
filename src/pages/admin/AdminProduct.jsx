//import React from 'react'

export default function AdminProduct() {
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
          <tbody>
            <tr>

            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}
