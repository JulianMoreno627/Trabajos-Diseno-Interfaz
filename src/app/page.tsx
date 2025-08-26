import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f4f3f1]">

      <div className="relative flex bg-white rounded-2xl shadow-md overflow-hidden w-[1000px] h-[600px]">

        <div className="absolute top-4 right-6">
          <p className="text-sm text-gray-500">
            Don’t have an account?{" "}
            <a href="#" className="text-black font-bold">Sign up</a>
          </p>
        </div>

        <div className="flex items-center justify-center bg-[#f9f9f8] w-[420px] h-full rounded-r-3xl">
          <Image 
            src="/logo-principal.png" 
            alt="logo-principal" 
            width={450}
            height={450}
            className="object-contain"
          />
        </div>

        <div className="flex flex-1 items-center justify-center px-12">
          <div className="w-full max-w-md flex flex-col">

            <h2 className="text-3xl font-bold text-black mb-2">Sign in</h2>

            <p className="text-sm text-black font-bold mb-6">
              Sign in with Open account
            </p>
 
            <div className="flex gap-3 mb-8">
              <button className="flex-1 flex items-center text-black font-bold justify-center border rounded-lg border-gray-200 py-2">
                <Image src="/google_PNG19635.png" alt="Google" width={20} height={20} className="mr-2" />
                Google
              </button>
              <button className="flex-1 flex items-center text-black font-bold justify-center border rounded-lg border-gray-200 py-2">
                <Image src="/aple.svg" alt="Apple" width={20} height={20} className="mr-2" />
                Apple ID
              </button>
            </div>

            <p className="text-sm text-black font-bold mb-4">
              Or continue with email address
            </p>

            <form className="flex flex-col gap-4">
              <div className="flex items-center bg-gray-100 border-gray-200 border rounded-lg px-3 py-2 gap-2">
                <Image src="/correo.png" alt="Email" width={20} height={20} />
                <input
                  type="email"
                  placeholder="tam@ui8.net"
                  className="flex-1 outline-none bg-gray-100 text-black placeholder-black"
                />
              </div>

              <div className="flex items-center bg-gray-100 border-gray-200 border rounded-lg px-3 py-2 gap-2">
                <Image src="/contrasena.png" alt="Password" width={20} height={20} />
                <input
                  type="password"
                  placeholder="********" 
                  className="flex-1 outline-none bg-gray-100 text-black placeholder-black"
                />
              </div>

              <button className="bg-blue-600 text-white py-2 rounded-lg">
                Start trading
              </button>
            </form>
          </div>
        </div>
      </div>  
    </main>
  );
}
