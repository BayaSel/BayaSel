import orangeImg from "../assets/cart/orange.png";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { Link } from "react-router-dom";

function CartProduct(props) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 justify-between w-[100%] px-10 py-5 my-20 bg-white-200 ">
        <table className="w-screen text-left">
          <thead className="border-b-[1px] border-gray-500">
            <tr>
              <th className="pb-10">Product</th>
              <th className="pb-10">Price</th>
              <th className="pb-10">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-10 pr-5 lg:pr-20">
                <img
                  src={orangeImg}
                  alt="orange"
                  className="flex lg:mr-2"
                />
                Fresh orange
              </td>
              <td className="pr-10">$250.00</td>
              <td>
                <div className="flex justify-between items-center">
                  <div className="flex justify-between py-[0.7rem] px-2 border-2 rounded-[1rem] w-[9rem]">
                    <button
                      onClick={() => {
                        setCount((c) => (c === 0 ? 0 : c - 1));
                      }}
                    >
                      <RemoveIcon color={`${count === 0 && "disabled"}`} />
                    </button>
                    <p className="inline-block px-4">{count}</p>
                    <button
                      onClick={() => {
                        setCount((c) => c + 1);
                      }}
                    >
                      <AddIcon />
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      // eslint-disable-next-line react/prop-types
                      props.itemRemoved();
                    }}
                  >
                    <DeleteOutlineIcon sx={{ color: red[500] }} />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="w-full lg:w-[50%] self-center border-[2px] py-10 px-10 rounded-[1rem]">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="pb-4">Subtotal</td>
                <td className="text-right">$1,300.00</td>
              </tr>
              <tr>
                <td className="pb-4">Delivery Fee</td>
                <td className="text-right">$10.00</td>
              </tr>
              <tr>
                <td className="pb-4">Discount</td>
                <td className="text-right">-$5.00</td>
              </tr>
              <tr>
                <td className="pb-4">Promo Offer</td>
                <td className="text-right">$0.00</td>
              </tr>
              <tr className="border-y-[1px] border-black">
                <td className="py-4">Grand Total</td>
                <td className="text-right">$1,305.00</td>
              </tr>
            </tbody>
          </table>
          <button className="w-[100%] mt-5 bg-[#50d71e] py-[10px] px-[0.4rem] rounded-[1rem]">
            <Link to='/checkout'> Proceed to checkout</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
