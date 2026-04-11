type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default async function Home() {
  const res = await fetch(
    "https://dummyjson.com/products/category/mens-shirts",
    { cache: "no-store" } // quan trọng để F5 ra data mới
  );

  const data = await res.json();
  const products: Product[] = data.products;

  const randomIndex = Math.floor(Math.random() * products.length);
  const product = products[randomIndex];

  return (
    <div className="min-h-screen bg-zinc-100 flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold mb-6">Fashion Trending 2026</h1>

      <div className="bg-white rounded-xl shadow-lg w-[280px] overflow-hidden">
        <div className="bg-gray-200 p-6 flex justify-center items-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-40 object-contain"
          />
        </div>

        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-blue-500 font-semibold">
              New Arrival
            </span>
            <span className="text-sm font-bold text-red-500">
              ${product.price}
            </span>
          </div>

          <h2 className="font-bold text-sm mb-3">{product.title}</h2>

          <button className="w-full bg-black text-white py-2 rounded-lg text-sm hover:bg-gray-800 transition">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}