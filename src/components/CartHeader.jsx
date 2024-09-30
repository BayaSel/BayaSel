import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import { green } from "@mui/material/colors";
import { Link } from "react-router-dom";

export default function CartHeader() {
  return (
    <div className="flex px-10 justify-between py-10 bg-gray-100 w-screen">
      <div className="flex justify-between">
        <p className="text-sm md:text-base lg:text-xl">
          Home
          <ArrowRightRoundedIcon />
        </p>
        <p className="text-gray-400 pt-1 text-sm md:text-base lg:text-xl">Shopping cart</p>
      </div>
      <div>
        <Link to="/" className="text-green-500 text-sm md:text-base lg:text-xl">
          continue Shopping <WestRoundedIcon sx={{ color: green[500] }} />
        </Link>
      </div>
    </div>
  );
}
