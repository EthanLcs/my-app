import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center py-16">
      <div className="mb-8">
        <Image
          src="/next.svg"
          alt="Business Career Compass"
          width={80}
          height={80}
          className="mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">Welcome to Business Career Compass</h1>
        <p className="text-lg text-gray-600">
          We provide students with the guidance, resources, and insights they need
          to navigate their careers and possibly break into finance. Our mission is to empower you to achieve professional 
          success through information from professionals already well established in the field.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 justify-center gap-6">        
        <a
          href="/members"
          className="rounded-lg border border-gray-300 p-6 transition hover:bg-gray-100"
        >
          <h2 className="text-xl font-semibold mb-2">Members &rarr;</h2>
          <p className="text-sm text-gray-600">
            Meet the Team behind Business Career Compass
          </p>
        </a>
        <a
          href="/blogs"
          className="rounded-lg border border-gray-300 p-6 transition hover:bg-gray-100"
        >
          <h2 className="text-xl font-semibold mb-2">Blogs &rarr;</h2>
          <p className="text-sm text-gray-600">
            Explore industry insights, career tips, and advice from real professionals in the field.
          </p>
        </a>

      </div>
    </div>
  );
}