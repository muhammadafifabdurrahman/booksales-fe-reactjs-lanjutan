export default function Books() {
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          Our Books Collection
        </h2>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Books
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* BOOK CARD */}
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="h-64 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                alt="Book"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                The Great Adventure
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Fiction
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Rp120.000
                </span>
                <button
                  type="button"
                  className="inline-flex items-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    className="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 1h12a1 1 0 0 1 1 1v16l-7-3-7 3V2a1 1 0 0 1 1-1Z"
                    />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Tambah lebih banyak card di sini kalau perlu */}
        </div>
      </div>
    </section>
  );
}
