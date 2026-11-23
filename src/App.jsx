import { useState } from 'react'
import './App.css'

const items = [
  { name: 'Wireless Headphones', category: 'Electronics', price: 1499, image: '🎧' },
  { name: 'Running Shoes', category: 'Fashion', price: 1299, image: '👟' },
  { name: 'Water Bottle', category: 'Home', price: 499, image: '🧴' },
  { name: 'A Good Book', category: 'Books', price: 349, image: '📚' },
]

function App() {
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState(0)
  const [message, setMessage] = useState('')
  const filteredItems = items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="page">
      <header>
        <div className="topbar">
          <div className="logo">amazon<span>.in</span></div>
          <div className="deliver">Deliver to India<br /><b>Update location</b></div>
          <form className="search" onSubmit={(event) => event.preventDefault()}>
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search Amazon.in" />
            <button>Search</button>
          </form>
          <div>Hello, sign in<br /><b>Account & Lists</b></div>
          <div>Returns<br /><b>& Orders</b></div>
          <button className="cart" onClick={() => setMessage(`You have ${cart} item(s) in your cart`)}>🛒 Cart ({cart})</button>
        </div>
        <nav>
          <a href="#products">☰ All</a><a href="#products">Fresh</a><a href="#products">Best Sellers</a><a href="#products">Today’s Deals</a><a href="#products">Mobiles</a><a href="#products">Customer Service</a><a href="#products">Fashion</a>
        </nav>
      </header>

      <main>
        <div className="banner">
          <h1>Welcome to Amazon</h1>
          <p>Find something you like today!</p>
          <button onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}>Shop now</button>
        </div>
        <h2 id="products">Popular products</h2>
        {filteredItems.length ? <div className="products">
          {filteredItems.map((item) => <div className="product" key={item.name}>
            <div className="picture">{item.image}</div>
            <p>{item.name}</p>
            <small>{item.category}</small>
            <h3>₹{item.price}</h3>
            <button onClick={() => { setCart(cart + 1); setMessage(`${item.name} added to cart`) }}>Add to cart</button>
          </div>)}
        </div> : <p>No products found. Try another search.</p>}
      </main>
      {message && <button className="message" onClick={() => setMessage('')}>{message} (click to close)</button>}
    </div>
  )
}

export default App
