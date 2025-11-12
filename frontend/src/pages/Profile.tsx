export default function Profile() {
  return (
    <div className="p-8 text-white max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">👤 My Identity</h1>
      <p className="text-gray-400 mb-4">
        Register your encrypted identity and verify eligibility for auctions.
      </p>

      <button className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
        Register Identity
      </button>

      <div className="mt-8 p-4 bg-gray-800 rounded-lg">
        <p>Status: <span className="text-green-400">Verified ✅</span></p>
        <p className="text-sm text-gray-400 mt-2">Your encrypted identity is stored privately.</p>
      </div>
    </div>
  );
}
