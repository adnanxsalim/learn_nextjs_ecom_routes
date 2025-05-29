import SearchComponent from "./components/Search";

export default function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="/products">Products</a></li>
          <li><a href="/orders">Orders</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/account">Account</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/checkout">Checkout</a></li>
          <SearchComponent placeholder="Search..."/>
        </ul>
      </nav>
      <div>
        <h1>Welcome to Our Store</h1>
        <p>Explore our products and find what you love!</p>
      </div>
    </div>
  );
}
