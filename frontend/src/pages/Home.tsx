import { useState } from "react";
import AuctionCard from "../components/AuctionCard";
// import Header from "../components/Header";

export default function Home() {
  const [auctions] = useState([
    {
      id: 1,
      name: "Zama Panther #42",
      description: "An encrypted NFT from the Panther series.",
      highestBid: "0.12 ETH",
      endsIn: "2h 15m",
      image: "https://picsum.photos/400/400?random=1",
      status: "active",
    },
    {
      id: 2,
      name: "Confidential Dragon",
      description: "Encrypted collectible powered by Zama.",
      highestBid: "0.25 ETH",
      endsIn: "Ended",
      image: "https://picsum.photos/400/400?random=2",
      status: "ended",
    },
    {
      id: 3,
      name: "Secret Ape #17",
      description: "Fully homomorphic NFT on Zama testnet.",
      highestBid: "0.08 ETH",
      endsIn: "5h 42m",
      image: "https://picsum.photos/400/400?random=3",
      status: "active",
    },
  ]);

  return (
    <div className="min-h-screen bg-[#f9fafb] text-black flex flex-col">
      {/* <Header /> */}

      <main className="flex-1 max-w-7xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Active Auctions</h2>

        <div className="flex justify-center flex-wrap gap-10 overflow-hidden">
          {auctions.map((auction) => (
            <AuctionCard key={auction.id} {...auction} />
          ))}
        </div>
      </main>
    </div>
  );
}
