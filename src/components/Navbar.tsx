import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"
import CartCountBadger from "./CartCountBadger"
const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white z-10">
        <div className="container hidden lg:block">
            <div className="flex justify-between items-center p-8">
                <h1 className="text-4xl font-medium">Exclusive</h1>
                <div className=' flex  font-medium text-2xl gap-5'>
                    <a className="hover:underline decoration-black-500" href="">Home</a>
                    <a className="hover:underline decoration-black-500" href="">Contact</a>
                    <a className="hover:underline decoration-black-500" href="">About</a>
                    <a className="hover:underline decoration-black-500" href="">Sign Up</a>
                </div>
                <div className="relative w-full max-w-[500px]">
                    <input className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[10px] w-full" type="text" placeholder="What are you Looking for ?"/>
                    <BsSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" size={20}/>
                </div>

            <div className="flex gap-4">
                <div className="icon__wrapper">
                    <AiOutlineUser/>
                </div>
                <div className="icon__wrapper relative">
                    <AiOutlineShoppingCart/>
                    <CartCountBadger size="w-[25px] h-[25px]"/>
                </div>
            </div>


            </div>

        </div>
    </div>
  )
}

export default Navbar