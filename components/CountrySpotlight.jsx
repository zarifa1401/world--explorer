export default function CountrySpotlight() {
  return (
    <div className="glass-card p-6">

      <div className="flex items-center gap-3 mb-5">

        <img
          src="https://flagcdn.com/w80/jp.png"
          className="w-12 rounded"
        />

        <div>

          <h3 className="text-3xl font-bold">
            Japan
          </h3>

          <p className="text-slate-400">
            Asia
          </p>

        </div>

      </div>

      <img
        src="https://images.unsplash.com/photo-1492571350019-22de08371fd3"
        className="rounded-2xl h-52 object-cover w-full"
      />

      <p className="text-slate-300 mt-4 leading-7">
        A beautiful blend of tradition
        and innovation in the heart of Asia.
      </p>

      <div className="grid grid-cols-3 mt-6 text-center">

        <div>

          <p className="text-slate-400 text-sm">
            Population
          </p>

          <p className="font-semibold">
            123.3M
          </p>

        </div>

        <div>

          <p className="text-slate-400 text-sm">
            Capital
          </p>

          <p className="font-semibold">
            Tokyo
          </p>

        </div>

        <div>

          <p className="text-slate-400 text-sm">
            Currency
          </p>

          <p className="font-semibold">
            JPY
          </p>

        </div>

      </div>

      <button className="primary-btn w-full mt-6">
        Explore Japan
      </button>

    </div>
  );
}