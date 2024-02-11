import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <p>There&apos;s nothing here yet.</p>
        <p>Go back to <a href="https://github.com">GitHub</a>.</p>
      </div>
    </main>
  );
}
