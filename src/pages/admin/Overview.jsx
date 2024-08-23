//import React from 'react'

import Select from "./component/Select";

export default function Overview() {
  return (
    <div className="font-poppins">
        <h1 className="text-[#555657] font-semibold text-2xl leading-[48px] mb-5">Good Day, VERA</h1>
       
        {/* Total Section */}
        <section className="flex gap-3">
            <div className="w-[200px] h-[120px] flex gap-3 p-3 bg-white rounded">
                <img src="/totaluser.png" alt="Total User Icon" className="w-[53px] h-[53px] mt-3"/>
                <div className="flex flex-col space-y-5">
                    <p className="text-semibold text-sm text-[#555657]">Total Users</p>
                    <p className="text-semibold text-xl text-[#417149] text-center">500</p>
                </div>
            </div>
            <div className="w-[200px] h-[120px] flex gap-3 p-3 bg-white rounded">
                <img src="/totalvendor.png" alt="Total Vendor Icon" className="w-[53px] h-[53px] mt-3"/>
                <div className="flex flex-col space-y-5">
                    <p className="text-semibold text-sm text-[#555657]">Total Vendors</p>
                    <p className="text-semibold text-xl text-[#115DCF] text-center">150</p>
                </div>
            </div>
            <div className="w-[200px] h-[120px] flex gap-3 p-3 bg-white rounded">
                <img src="/totalsales.png" alt="Total Sale Icon" className="w-[53px] h-[53px] mt-3"/>
                <div className="flex flex-col space-y-5">
                    <p className="text-semibold text-sm text-[#555657]">Total Sales</p>
                    <p className="text-semibold text-xl text-[#8E0AA3] text-center">850</p>
                </div>
            </div>
            <div className="w-[200px] h-[120px] flex gap-3 p-3 bg-white rounded">
                <img src="/totalvisitor.png" alt="Total Visitor Icon" className="w-[53px] h-[53px] mt-3"/>
                <div className="flex flex-col space-y-5">
                    <p className="text-semibold text-sm text-[#555657]">Total Visitors</p>
                    <p className="text-semibold text-xl text-[#C09605] text-center">333</p>
                </div>
            </div>
        </section>

        {/* Sales Summary and Low Stock Section */}
        <section className="flex flex-col lg:flex-row my-5 gap-2">
            <div className="bg-[#FFFFFF] py-3 px-4 rounded-[10px]">
                <div className="flex justify-between font-semibold">
                    <h2 className="text-xl text-[#555657]">Sales Summary</h2>
                    <div className="flex gap-2">
                        <button className="bg-Green hover:bg-[#63da5f] text-white py-1 px-[10px] rounded-lg text-base">Monthly</button>
                        <Select />
                    </div>
                </div>
                <img src="/salessummary.png" alt="/Graph of sales for the year" className="mt-5 w-[470px]" />
            </div>
            {/* Low Stock */}
            <div className="bg-[#FFFFFF] py-2 px-3 rounded-[10px]">
                <h2 className="text-[#DB7C05] font-semibold text-xl py-2">Low Stock</h2>
                <table className="table-auto border-collapse">
                    <thead className="bg-Green text-white rounded-lg">
                        <tr className="text-sm font-medium">
                            <th className="px-3 py-2">Product</th>
                            <th className="px-3 py-2">Qty left</th>
                            <th className="px-3 py-2">Vendor</th>
                            <th className="px-3 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody className="font-medium text-[10px] text-[#555657] divide-y divide-[#E5E7EB]">
                        <tr className='my-1'>
                            <td className="flex flex-col gap-1 py-3">
                                <img src="/Beans.png" alt="Image of beans" className="w-[50px]"/>
                                <p>Beans</p>
                            </td>
                            <td>8 (Bags)</td>
                            <td>LMK Farms</td>
                            <td><button className="bg-[#F18805] text-white rounded-lg py-1 px-[10px]">Pending</button></td>
                        </tr>
                        <tr className='my-1'>
                            <td className="flex flex-col gap-1 py-3">
                                <img src="/Carrot.png" alt="Image of beans" className="w-[50px]"/>
                                <p>Carrots</p>
                            </td>
                            <td>6 (Bags)</td>
                            <td>Dotun Foods</td>
                            <td><button className="bg-[#AB3533] text-white rounded-lg py-1 px-[10px]">Not alerted</button></td>
                        </tr>
                        <tr className='my-1'>
                            <td className="flex flex-col gap-1 py-3">
                                <img src="/Banana.png" alt="Image of beans" className="w-[50px]"/>
                                <p>Banana</p>
                            </td>
                            <td>5 (Bunch)</td>
                            <td>Dotun Foods</td>
                            <td><button className="bg-[#AB3533] text-white rounded-lg py-1 px-[10px]">Not alerted</button></td>
                        </tr>
                        <tr className='my-1'>
                            <td className="flex flex-col gap-1 py-3">
                                <img src="/Rice.png" alt="Image of beans" className="w-[50px]"/>
                                <p>Rice</p>
                            </td>
                            <td>8 (Bags)</td>
                            <td>LMK Farms</td>
                            <td><button className="bg-[#F18805] text-white rounded-lg py-1 px-[10px] h-fit">Pending</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
  )
}
