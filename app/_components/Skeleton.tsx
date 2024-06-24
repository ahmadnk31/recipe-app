export default function Skeleton() {
  return (
    <div className="container mx-auto">
      <div className="h-16 bg-orange-500 animate-pulse mb-4"></div>
      <div className="grid grid-cols-3 gap-4 h-96 max-md:grid-cols-2">
        <div className="h-full w-full animate-pulse bg-orange-500 mb-2"></div>
        <div className="h-full w-full animate-pulse bg-orange-500 mb-2"></div>
        <div className="h-full w-full animate-pulse bg-orange-500 mb-2"></div>
        <div className="h-full w-full animate-pulse bg-orange-500 mb-2"></div>
        <div className="h-full w-full animate-pulse bg-orange-500 mb-2"></div>
        <div className="h-full w-full animate-pulse bg-orange-500 mb-2"></div>
      </div>
    </div>
  );
}