export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-black mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold text-black mb-2">Loading Handcrafts</h2>
        <p className="text-gray-600">Preparing your premium shopping experience...</p>
      </div>
    </div>
  );
}
