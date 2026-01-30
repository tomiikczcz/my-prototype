import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4">
      <h1 className="text-center text-2xl font-semibold text-zinc-900">
        Vehicle insurance — Lundegaard
      </h1>
      <p className="max-w-md text-center text-zinc-600">
        Mandatory liability and comprehensive insurance. Quote, form, and
        contract in a few steps.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/onboarding"
          className="rounded-md bg-zinc-900 px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          Get started — Insure vehicle
        </Link>
        <Link
          href="/dashboard"
          className="rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-center text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
        >
          Sign in (client)
        </Link>
      </div>
    </div>
  );
}
