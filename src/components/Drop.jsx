import React from "react";
import { Link } from "react-router-dom";
import useToken from "../modules/useToken";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
  faFlagCheckered,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";

function Dropdown() {
  const { is_token, delete_token } = useToken();
  return (
    <div className="w-[200px] h-[200px] rounded shadow-md z-10 absolute right-[2%] top-[20%] sm:top-[15%] font-roboto">
      {is_token && (
        <ul className="w-full bg-background z-20 min-h-full rounded">
          <Link
            to="/cart"
            className=" my-2  w-full rounded text-md hover:text-white"
          >
            <li className="  w-full  rounded text-md  my-4  hover:text-primary ">
              <span className="mx-2">
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
              &nbsp;cart
            </li>
          </Link>
          <Link
            to="/custom"
            className=" my-2  w-full rounded text-md hover:text-white"
          >
            <li className="  w-full  rounded text-md  my-4  hover:text-primary ">
              <span className="mx-2">
                <FontAwesomeIcon icon={faBagShopping} />
              </span>
              &nbsp;custom order
            </li>
          </Link>
          <Link
            to="/report"
            className=" my-2  w-full rounded text-md hover:text-white"
          >
            <li className="  w-full  rounded text-md  my-4  hover:text-primary ">
              <span className="mx-2">
                <FontAwesomeIcon icon={faFlagCheckered} />
              </span>
              &nbsp;report
            </li>
          </Link>
          {/* the settings feature is coming on the next update */}
          {/* <Link to='/settings' className=' my-2  w-full  rounded text-md hover:text-white'><li className=' my-2  w-full  rounded text-md hover:text-white '>settings</li></Link> */}
          <li
            className="  w-full  rounded text-md  my-4 mx-2  hover:text-primary "
            onClick={() => delete_token()}
          >
            log out
          </li>
        </ul>
      )}

      {!is_token && (
        <p className="flex items-center justify-center flex-col w-full h-full">
          <FontAwesomeIcon icon={faSignIn}/><br />
          LOGGED OUT <br />
          <a className="underline text-primary" href="/accounts">
            click here
          </a>
          to login
        </p>
      )}
    </div>
  );
}

export default Dropdown;
