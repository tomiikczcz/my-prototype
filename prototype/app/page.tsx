import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-xl font-semibold text-zinc-900">
        Vehicle insurance — Lundegaard
      </h1>
      <Link
        href="/welcome"
        className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
      >
        Go to welcome page →
      </Link>
    </div>
  );
}
