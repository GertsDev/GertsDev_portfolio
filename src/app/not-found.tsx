import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-extrabold text-neutral-200 md:text-8xl">404</h1>
      <p className="mt-4 text-xl font-semibold text-foreground md:text-2xl">Page not found</p>
      <p className="mt-2 max-w-prose text-muted-foreground">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-neutral-800 px-4 py-2 text-center text-sm font-medium text-white hover:bg-neutral-700 focus:outline-none focus:ring-4 focus:ring-neutral-600"
      >
        Go back home
      </Link>
    </div>
  );
}
