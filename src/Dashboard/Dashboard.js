import Nav from '../Components/Navbar/Nav';
import './Dashboard.css';
import { useCart } from '../Products/CartContext';

function Dashboard() {
  const { items = [] } = useCart();

  const totalSpent = items.reduce((sum, item) => sum + item.price * item.count, 0);
  const selectedCount = items.reduce((sum, item) => sum + item.count, 0);

  const categorySummary = items.reduce((acc, item) => {
    const id = item.id;
    let category = 'Add-ons';

    if (id >= 1 && id <= 5) {
      category = 'Venue';
    } else if (id >= 6 && id <= 9) {
      category = 'Meals';
    }

    acc[category] = (acc[category] || 0) + item.count;
    return acc;
  }, {});

  return (
    <div className="dashboard-page">
      <Nav />

      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>Conference Expense Dashboard</h1>
          <p>Keep track of the conference choices you have planned so far.</p>
        </header>

        <section className="summary-grid">
          <article className="summary-card">
            <h3>Total Spent</h3>
            <p>${totalSpent}</p>
          </article>

          <article className="summary-card">
            <h3>Selected Items</h3>
            <p>{selectedCount}</p>
          </article>

          <article className="summary-card">
            <h3>Categories</h3>
            <p>{Object.keys(categorySummary).length}</p>
          </article>
        </section>

        <section className="dashboard-section">
          <h2>Selected Items</h2>

          {items.length === 0 ? (
            <p className="empty-state">
              No selections yet. Start planning by choosing a venue, meal, or add-on.
            </p>
          ) : (
            <ul className="item-list">
              {items.map((item) => (
                <li key={item.id} className="item-card">
                  <div>
                    <h3>{item.name}</h3>
                    <p>Quantity: {item.count}</p>
                  </div>
                  <span>${item.price * item.count}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="dashboard-section">
          <h2>Planning Snapshot</h2>
          <div className="snapshot-grid">
            <article className="snapshot-card">
              <h3>Venue</h3>
              <p>{categorySummary.Venue || 0} selected</p>
            </article>
            <article className="snapshot-card">
              <h3>Meals</h3>
              <p>{categorySummary.Meals || 0} selected</p>
            </article>
            <article className="snapshot-card">
              <h3>Add-ons</h3>
              <p>{categorySummary['Add-ons'] || 0} selected</p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;