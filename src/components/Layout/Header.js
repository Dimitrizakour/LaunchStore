import React from "react";
import logo from "../assets/logo.PNG";
import cart from "../assets/cart.jpg";
const Navbar = (props) => {
     return(
        <React.Fragment>
        <section class=" flex flex-row  w-200 h-20.5   shadow-lg border-b-4  border-zinc-400">
        <div class="basis-1/4 ml-11" >
            <img class=" w-16 md:w-32 lg:w-48 " src={logo} alt="logoimg"/>
        </div>
        <div class="basis-1/2 flex justify-center" >
            <button class="mr-10 font-bold">Home</button>
            <button class="mr-10 font-bold">About Us</button>
            <button class="mr-10 font-bold ">Contact</button>
        </div>
        <div class="basis-1/4 flex justify-center ml-11 ">
            <button> <img class=" w-15 md:w-15 lg:w-10 " src={cart} /></button>
        </div>
        </section>
        </React.Fragment>
     );
}
export default Navbar;