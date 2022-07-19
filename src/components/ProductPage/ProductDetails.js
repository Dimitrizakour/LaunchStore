import { Fragment,useState,useRef } from "react";

import  "./ProductItem.css";

const ProductDetails = (props) => {

const [v,setv] = useState('a');

// const amountInputRef = useRef();
const Handler = (event) => 
{
  setv= event.target.value;
//   const enteredAmount = amountInputRef.current.value
  console.log(v);
};


    return (
      
     <Fragment>

        {/* product details section  */}

        <div className="item_details">

            {/* title and price */}
            <div className="">
                 <p className="product_title"> PRODUCT TITLE</p>
                 <p className="product_price"> $499</p>
                 <hr className="mt-5 border-gray-300  "/>
            </div>
         
            {/* colors selection  */}
            <div className="mt-6">
                 <p className="text-xl font-bold mb-4"> choose color</p>
                 <input type="radio" className="radio bg-blue-600 appearance-none   rounded-full  w-6 h-6 mr-6" value="button1" onClick={Handler} ></input>
                 <input type="radio" className="radio bg-red-400 appearance-none   rounded-full  w-6 h-6 mr-6"></input>
                 <input type="radio" className="radio bg-black appearance-none   rounded-full  w-6 h-6 mr-6"></input>
                 <input type="radio" className="radio bg-yellow-400 appearance-none   rounded-full  w-6 h-6 mr-6"></input>
                 <input type="radio" className="radio bg-yellow-400 appearance-none   rounded-full  w-6 h-6 mr-6"></input>
                 <input type="radio" className="radio bg-yellow-400 appearance-none   rounded-full  w-6 h-6 mr-6"></input>
                 <input type="radio" className="radio bg-yellow-400 appearance-none   rounded-full  w-6 h-6 mr-6"></input>
                 <input type="radio" className="radio bg-yellow-400 appearance-none   rounded-full  w-6 h-6 mr-6"></input>
                 <input type="radio" className="radio bg-yellow-400 appearance-none   rounded-full  w-6 h-6 mr-6"></input>
                 <input type="radio" className="radio bg-yellow-400 appearance-none   rounded-full  w-6 h-6 mr-6"></input>
                 <input type="radio" className="radio bg-yellow-400 appearance-none   rounded-full  w-6 h-6 mr-6"></input>
            </div>

            {/* Size selection */}
            <div className="mt-8">
                 <p className="text-xl font-bold mb-4"> Select size</p>
                <button className=" size text-lg border border-black py-2 w-14 rounded-sm mr-3">XS</button>
                <button className=" size text-lg border border-black py-2 w-14 rounded-sm mr-3">S</button>
                <button className=" size text-lg border border-black py-2 w-14 rounded-sm mr-3">M</button>
                <button className="size text-lg border border-black py-2  w-14 rounded-sm mr-3">L</button>
                <button className="size text-lg border border-black py-2  w-14 rounded-sm mr-3">XL</button>
                <button className="size text-lg border border-black py-2  w-14 rounded-sm mr-3">2XL</button>
                <button className="size text-lg border border-black py-2  w-14 rounded-sm mr-3">3XL</button>
            </div>

        </div>


     </Fragment>

    );
};

export default ProductDetails;