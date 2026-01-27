import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="bg-light pb-5">
      <div className="container">
        <h1 className="text-center display-6 p-4">🛒 Cell Store</h1>
        <div className="container d-flex justify-content-center">
          <ProductList/>
        </div>
      </div>
    </main>
  );
}
