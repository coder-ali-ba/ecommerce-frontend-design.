import '../App.css'

export default function DiscountBanner() {
  return (
    <div className="w-full mt-4 mb-4">
      <div className="relative overflow-hidden rounded-lg bg-blue-600 flex items-center justify-between px-6 py-5 text-white">
        
        {/* Left text */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold">
            Super discount on more than 100 USD
          </h2>
          <p className="text-sm text-blue-100">
            Have you ever finally just write dummy info
          </p>
        </div>

        {/* Button */}
        

        {/* Right triangle shape */}
        <div className="absolute right-0 top-0 h-full w-96 bg-blue-900 clip-path-banner  pt-6 text-end pr-6  hidden md:block">
                <button className="bg-orange-500 hover:bg-orange-600 transition text-white text-sm font-medium px-5 py-2 rounded-md">
                 Shop now
            </button>
        </div>
      </div>
    </div>
  );
}
