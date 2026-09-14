export default function Loading() {
  return (
    <main
      className="flex min-h-[60vh] items-center justify-center bg-gray-50"
      aria-label="Loading"
    >
      <div className="text-center">
        <div
          className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-green-200 border-t-green-700"
          aria-hidden="true"
        />
        <p className="mt-4 text-sm font-medium text-gray-600">
          Loading GreenFuture...
        </p>
      </div>
    </main>
  );
}