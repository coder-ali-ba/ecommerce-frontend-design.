import {
  Home,
  List,
  Heart,
  Package,
  Globe,
  Headphones,
  Info,
  X,
  User,
} from "lucide-react";

export default function Sidebar({ close }) {
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="flex-1 bg-black/50"
        onClick={close}
      />

      {/* Sidebar */}
      <aside className="w-[280px] bg-white h-full shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gray-100">
          <div className="flex flex-col  justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <User size={20} className="text-gray-600" />
            </div>
            <span className="text-sm font-medium">
              Sign in | Register
            </span>
          </div>

          <X
            size={18}
            className="cursor-pointer text-gray-500"
            onClick={close}
          />
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-1 text-sm text-gray-700">
          <MenuItem icon={<Home size={18} />} label="Home" />
          <MenuItem icon={<List size={18} />} label="Categories" />
          <MenuItem icon={<Heart size={18} />} label="Favorites" />
          <MenuItem icon={<Package size={18} />} label="My orders" />

          <Divider />

          <MenuItem icon={<Globe size={18} />} label="English | USD" />
          <MenuItem icon={<Headphones size={18} />} label="Contact us" />
          <MenuItem icon={<Info size={18} />} label="About" />

          <Divider />

          <div className="space-y-3 pt-2 text-gray-600 text-xs">
            <p className="cursor-pointer">User agreement</p>
            <p className="cursor-pointer">Partnership</p>
            <p className="cursor-pointer">Privacy policy</p>
          </div>
        </nav>
      </aside>
    </div>
  );
}

function MenuItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-gray-100">
      <span className="text-gray-500">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function Divider() {
  return <hr className="my-3 border-gray-200" />;
}
