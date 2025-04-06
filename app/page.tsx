
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 to-pink-500 text-white px-4 py-10">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Mirë se vjen në <span className="text-blue-600">Viralistic</span> 🚀
        </h1>
        <p className="text-xl mb-8">
          Platforma që shpërblen krijuesit shqiptarë për çdo view të vërtetë.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
          >
            Hyr
          </Link>
          <Link
            href="/signup"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-50"
          >
            Regjistrohu
          </Link>
        </div>
      </div>
    </main>
  );
}
