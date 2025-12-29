import { Menu, ChevronDown } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden md:block w-full border-y border-gray-200  bg-white  text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-10 flex items-center justify-between mx-6">
          {/* Left */}
          <div className="flex items-center ml-[-20px] gap-5 text-gray-700">
            <div className="flex items-center gap-1 cursor-pointer">
              <Menu size={16} />
              <span>All category</span>
            </div>

            <span className="cursor-pointer">Hot offers</span>
            <span className="cursor-pointer">Gift boxes</span>
            <span className="cursor-pointer">Projects</span>

            <div className="flex items-center gap-1 cursor-pointer">
              <span>Menu item</span>
              <ChevronDown size={14} />
            </div>

            <span className="cursor-pointer">Help</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6 text-gray-700">
            <div className="flex items-center gap-1 cursor-pointer">
              <select name="language" id="">
                <option value="English">Eng</option>
                <option value="Urdu">Ur</option>
              </select>
              
            </div>

            <div className="flex items-center gap-1 cursor-pointer">
              <span>Ship to</span>
              <img src="https://flagcdn.com/w20/pk.png" alt="" />
              <select name="country" id="">
                <option value="Spain"></option>
              </select>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

