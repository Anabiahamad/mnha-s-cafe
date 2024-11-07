import Link from "next/link";
import Header from "@/components/Header";

import React from 'react'

function page() {
  return (
<>
<Header />
<main id="about">
        <h1 className="text-2xl font-bold">About Us</h1>
        <p className="text-gray-700">
          Welcome to our cafe! We are dedicated to serving the best coffee and treats.
        </p>
        <Link href="/">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Return to Home
          </button>
        </Link>
      </main>
</>
  )
}

export default page