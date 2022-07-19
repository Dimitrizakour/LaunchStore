

const Footer = (props) => {
    return (
      <nav class="relative flex flex-wrap items-center justify-between mt-[135px] py-4 bg-black ">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <p class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
              Powered by teelaunch
            </p>
          </div>
          <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
            <ul class="flex flex-col lg:flex-row list-none ml-auto">
              <li class="nav-item">
                <p class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  Terms & Conditions
                </p>
              </li>
              <li class="nav-item">
                <p class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  Privacy Policy
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  export default Footer;