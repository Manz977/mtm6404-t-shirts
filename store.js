const Store = () => {
  const [items, setItems] = React.useState(tshirts);

  const handleBuy = (index) => {
    const newItems = [...items];

    const quantity = parseInt(newItems[index].quantity);

    newItems[index].stock -= quantity;

    newItems[index].quantity = 1;

    setItems(newItems);
  };


  const handleQuantityChange = (index, value) => {
    const newItems = [...items];
    newItems[index].quantity = parseInt(value);
    setItems(newItems);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
      <h1>T-Shirts</h1>
      {items.map((item, i) => (
        <div key={i} style={{ border: "1px solid #000000", padding: "10px", margin: "10px"}}>
          <h2>{item.title}</h2>
          <img src={`/images/${item.image}`} alt={item.title} width="150" />
          <p>{item.stock === 0 ? "Out of Stock" : `Stock: ${item.stock}`}</p>

          {item.stock > 0 && (
            <div>
              <label>Quantity: </label>
              <select
                value={item.quantity}
                onChange={(e) => handleQuantityChange(i, e.target.value)}
              >
                {Array.from({ length: item.stock }, (_, j) => j + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <button onClick={() => handleBuy(i)}>Buy</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Store />);