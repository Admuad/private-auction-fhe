import { useState } from "react";
import { motion } from "framer-motion";

interface AuctionCardProps {
  name: string;
  description: string;
  highestBid: string;
  endsIn: string;
  image: string;
  status: string;
}

export default function AuctionCard({
  name,
  description,
  highestBid,
  endsIn,
  image,
  status,
}: AuctionCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-[300px] h-[420px] [perspective:1000px]"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700"
        animate={{ rotateY: flipped ? 180 : 0 }}
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 bg-white text-black rounded-2xl shadow-xl overflow-hidden [backface-visibility:hidden]">
          <img src={image} alt={name} className="w-full h-48 object-cover" />
          <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
            <div>
              <h2 className="text-lg font-semibold">{name}</h2>
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
            <div className="mt-4 text-sm">
              <p>
                <strong>Highest Bid:</strong> {highestBid}
              </p>
              <p>
                <strong>Ends In:</strong> {endsIn}
              </p>
            </div>
            <button className="mt-4 w-full py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
              View Auction
            </button>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 bg-gray-900 text-white rounded-2xl p-6 flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-center text-sm mb-4">Click to flip back.</p>
          <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
            Place Bid
          </button>
        </div>
      </motion.div>
    </div>
  );
}
