import Nav from "@/components/Nav";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="bg-light pb-5">
      <Nav/>
      <div className="container">
        <div className="container d-flex justify-content-center">
          <ProductList/>
        </div>
      </div>
    </main>
  );
}
