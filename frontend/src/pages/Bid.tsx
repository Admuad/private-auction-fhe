export default function Bid() {
  return (
    <div className="p-8 text-white max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">💰 Submit Encrypted Bid</h1>
      <p className="text-gray-400 mb-4">
        Enter your bid amount — it will be encrypted before submission.
      </p>

      <form className="space-y-4">
        <input
          type="number"
          placeholder="Bid Amount (ETH)"
          className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
        />
        <button className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
          Encrypt & Submit Bid
        </button>
      </form>
    </div>
  );
}
