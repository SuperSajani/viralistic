export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-bold mb-4">Hyr në Viralistic</h2>
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        <input type="email" placeholder="Email-i" className="w-full p-3 border rounded" required />
        <input type="password" placeholder="Fjalëkalimi" className="w-full p-3 border rounded" required />
        <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded hover:bg-purple-700 transition">
          Hyr
        </button>
      </form>
    </main>
  );
}
