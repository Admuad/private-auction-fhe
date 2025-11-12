import { useState } from "react";

export default function CreateAuction() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    reservePrice: "",
    endTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Auction Created:", form);
    alert(`Auction "${form.name}" created (mock) 🪄`);
    setForm({ name: "", description: "", reservePrice: "", endTime: "" });
  };

  return (
    <div className="max-w-2xl mx-auto text-white p-8 bg-gray-900 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6">🧱 Create New Auction</h1>
      <p className="text-gray-400 mb-6">
        Define your NFT auction parameters. Your data will later be encrypted before being submitted to the blockchain.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* NFT Name */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">NFT Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Zama Panther #42"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Short description of the NFT..."
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            rows={3}
          />
        </div>

        {/* Reserve Price */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">Reserve Price (ETH)</label>
          <input
            type="number"
            name="reservePrice"
            value={form.reservePrice}
            onChange={handleChange}
            placeholder="0.05"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            step="0.001"
            required
          />
        </div>

        {/* End Time */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">Auction End Time</label>
          <input
            type="datetime-local"
            name="endTime"
            value={form.endTime}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition"
        >
          🔒 Encrypt & Create Auction
        </button>
      </form>
    </div>
  );
}
