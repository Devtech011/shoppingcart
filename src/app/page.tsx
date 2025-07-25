import Image from "next/image";
import ShoppingCart from "./Shopping";


export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-500/20">
      <ShoppingCart/>
    </div>
  );
}
