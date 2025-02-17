// pages/404.tsx
import Head from 'next/head'
import Link from 'next/link'

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Kirill Gertsik Portfolio - 404</title>
        <link rel="icon" href="/images/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
     
        <div className="flex-grow flex flex-col items-center justify-center text-center py-20">
          <h1 className="text-9xl font-extrabold text-blue-700 dark:text-blue-500">404</h1>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-4">Page Not Found</p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            Sorry, the page you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  )
}

export default Custom404
