// pages/404.tsx
import Head from "next/head";
import Link from "next/link";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Kirill Gertsik Portfolio - 404</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>
      <div className="flex min-h-screen flex-col bg-gray-900">
        <div className="flex flex-grow flex-col items-center justify-center py-20 text-center">
          <h1 className="text-9xl font-extrabold text-blue-500">404</h1>
          <p className="mt-4 text-2xl font-semibold text-white">
            Page Not Found
          </p>
          <p className="mt-2 text-lg text-gray-400">
            {`Sorry, the page you're looking for doesn't exist.`}
          </p>
          <Link
            href="/"
            className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 focus:outline-none"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Custom404;
