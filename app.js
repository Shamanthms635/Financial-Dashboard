/* ================================================================
   1. DATA — our mock transactions
   In a real app this would come from a server.
================================================================ */

let transactions = [
  { id: 1,  date: "2025-11-05", description: "Monthly Salary",      category: "Salary",        type: "income",  amount: 4500.00 },
  { id: 2,  date: "2025-11-08", description: "Grocery Shopping",    category: "Food",          type: "expense", amount: 120.50  },
  { id: 3,  date: "2025-11-10", description: "Netflix",             category: "Entertainment", type: "expense", amount: 15.99   },
  { id: 4,  date: "2025-11-12", description: "Uber Ride",           category: "Transport",     type: "expense", amount: 18.75   },
  { id: 5,  date: "2025-11-15", description: "Freelance Project",   category: "Freelance",     type: "income",  amount: 800.00  },
  { id: 6,  date: "2025-11-18", description: "Electricity Bill",    category: "Bills",         type: "expense", amount: 95.00   },
  { id: 7,  date: "2025-11-20", description: "Dinner Out",          category: "Food",          type: "expense", amount: 65.00   },
  { id: 8,  date: "2025-11-22", description: "Amazon Purchase",     category: "Shopping",      type: "expense", amount: 210.00  },
  { id: 9,  date: "2025-11-25", description: "Doctor Visit",        category: "Health",        type: "expense", amount: 80.00   },
  { id: 10, date: "2025-11-28", description: "Gym Membership",      category: "Health",        type: "expense", amount: 45.00   },
  { id: 11, date: "2025-12-01", description: "Monthly Salary",      category: "Salary",        type: "income",  amount: 4500.00 },
  { id: 12, date: "2025-12-03", description: "Coffee & Snacks",     category: "Food",          type: "expense", amount: 32.00   },
  { id: 13, date: "2025-12-05", description: "Spotify",             category: "Entertainment", type: "expense", amount: 9.99    },
  { id: 14, date: "2025-12-07", description: "Bus Pass",            category: "Transport",     type: "expense", amount: 55.00   },
  { id: 15, date: "2025-12-10", description: "Freelance Design",    category: "Freelance",     type: "income",  amount: 1200.00 },
  { id: 16, date: "2025-12-12", description: "Internet Bill",       category: "Bills",         type: "expense", amount: 60.00   },
  { id: 17, date: "2025-12-15", description: "Supermarket",         category: "Food",          type: "expense", amount: 98.00   },
  { id: 18, date: "2025-12-18", description: "Headphones",          category: "Shopping",      type: "expense", amount: 150.00  },
  { id: 19, date: "2025-12-20", description: "Pharmacy",            category: "Health",        type: "expense", amount: 28.50   },
  { id: 20, date: "2025-12-22", description: "Movie Tickets",       category: "Entertainment", type: "expense", amount: 24.00   },
  { id: 21, date: "2026-01-01", description: "Monthly Salary",      category: "Salary",        type: "income",  amount: 4500.00 },
  { id: 22, date: "2026-01-03", description: "New Year Dinner",     category: "Food",          type: "expense", amount: 180.00  },
  { id: 23, date: "2026-01-08", description: "Book Store",          category: "Shopping",      type: "expense", amount: 45.00   },
  { id: 24, date: "2026-01-10", description: "Taxi",                category: "Transport",     type: "expense", amount: 22.00   },
  { id: 25, date: "2026-01-15", description: "Freelance App",       category: "Freelance",     type: "income",  amount: 950.00  },
  { id: 26, date: "2026-01-18", description: "Electricity Bill",    category: "Bills",         type: "expense", amount: 102.00  },
  { id: 27, date: "2026-01-22", description: "Restaurant",          category: "Food",          type: "expense", amount: 55.00   },
  { id: 28, date: "2026-01-25", description: "Online Shopping",     category: "Shopping",      type: "expense", amount: 320.00  },
  { id: 29, date: "2026-01-28", description: "Gym",                 category: "Health",        type: "expense", amount: 45.00   },
  { id: 30, date: "2026-02-01", description: "Monthly Salary",      category: "Salary",        type: "income",  amount: 4500.00 },
  { id: 31, date: "2026-02-04", description: "Valentine Dinner",    category: "Food",          type: "expense", amount: 140.00  },
  { id: 32, date: "2026-02-07", description: "Streaming Bundle",    category: "Entertainment", type: "expense", amount: 35.00   },
  { id: 33, date: "2026-02-10", description: "Petrol",              category: "Transport",     type: "expense", amount: 70.00   },
  { id: 34, date: "2026-02-15", description: "Freelance Photo",     category: "Freelance",     type: "income",  amount: 600.00  },
  { id: 35, date: "2026-02-18", description: "Water & Gas",         category: "Bills",         type: "expense", amount: 88.00   },
  { id: 36, date: "2026-02-22", description: "Grocery",             category: "Food",          type: "expense", amount: 110.00  },
  { id: 37, date: "2026-02-26", description: "Clothing",            category: "Shopping",      type: "expense", amount: 199.00  },
  { id: 38, date: "2026-03-01", description: "Monthly Salary",      category: "Salary",        type: "income",  amount: 4800.00 },
  { id: 39, date: "2026-03-05", description: "Takeout",             category: "Food",          type: "expense", amount: 45.00   },
  { id: 40, date: "2026-03-08", description: "Concert Tickets",     category: "Entertainment", type: "expense", amount: 95.00   },
  { id: 41, date: "2026-03-12", description: "Metro Pass",          category: "Transport",     type: "expense", amount: 50.00   },
  { id: 42, date: "2026-03-15", description: "Freelance Writing",   category: "Freelance",     type: "income",  amount: 400.00  },
  { id: 43, date: "2026-03-18", description: "Phone Bill",          category: "Bills",         type: "expense", amount: 75.00   },
  { id: 44, date: "2026-03-22", description: "Supermarket",         category: "Food",          type: "expense", amount: 135.00  },
  { id: 45, date: "2026-03-28", description: "Gym",                 category: "Health",        type: "expense", amount: 45.00   },
];

// Track the next id to give new transactions
let nextId   = Math.max(...transactions.map(t => t.id)) + 1;
let editingId = null;         // null = adding new; a number = editing that id
let isDark    = false;        // dark mode on or off
let role      = "viewer";     // "viewer" or "admin"


/* ================================================================
   2. HELPER FUNCTIONS — small utilities used throughout
================================================================ */

// Format a number as money: 1234.5 → "$1,234.50"
function money(n) {
  return "$" + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Format a date string: "2026-03-01" → "Mar 1, 2026"
function fmtDate(str) {
  return new Date(str + "T00:00:00").toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric"
  });
}

// Get "YYYY-MM" from a date string (used to group by month)
function yearMonth(str) { return str.slice(0, 7); }

// Show a brief popup message at the bottom of the screen
function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.remove("hidden");
  el.classList.add("show");
  setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => el.classList.add("hidden"), 250);
  }, 2000);
}


/* ================================================================
   3. LOCAL STORAGE — save & load data in the browser
   This means your data survives page refresh.
================================================================ */

function save()  { localStorage.setItem("ft_tx", JSON.stringify(transactions)); }

function load() {
  const raw = localStorage.getItem("ft_tx");
  if (raw) {
    transactions = JSON.parse(raw);
    nextId = Math.max(...transactions.map(t => t.id)) + 1;
  }
}


/* ================================================================
   4. CALCULATIONS — derive summary numbers from data
================================================================ */

// Total of all income transactions
function totalIncome() {
  return transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
}

// Total of all expense transactions
function totalExpenses() {
  return transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
}

// Net balance
function balance() { return totalIncome() - totalExpenses(); }

// Spending grouped by category → { "Food": 300, "Bills": 100 }
function byCategory() {
  const out = {};
  transactions.filter(t => t.type === "expense").forEach(t => {
    out[t.category] = (out[t.category] || 0) + t.amount;
  });
  return out;
}

// Last 6 months of data → [{ month:"Nov", key:"2025-11", income:X, expense:Y }]
function monthlyData() {
  const months = [];
  const now    = new Date();
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push({
      key:   d.toISOString().slice(0, 7),
      month: d.toLocaleDateString("en-US", { month: "short" })
    });
  }
  return months.map(m => {
    const rows    = transactions.filter(t => yearMonth(t.date) === m.key);
    const income  = rows.filter(t => t.type === "income").reduce((s, t) => s + t.amount, 0);
    const expense = rows.filter(t => t.type === "expense").reduce((s, t) => s + t.amount, 0);
    return { ...m, income, expense };
  });
}


/* ================================================================
   5. RENDERING — build HTML and put it on the page
================================================================ */

// Update the 3 summary cards on the Dashboard
function renderCards() {
  document.getElementById("total-balance").textContent  = money(balance());
  document.getElementById("total-income").textContent   = money(totalIncome());
  document.getElementById("total-expenses").textContent = money(totalExpenses());
}

// Build a table of transactions and insert it into a container element
// - data       : array of transaction objects to show
// - containerId: id of the element to put the table into
// - limit      : only show first N rows (optional)
// - actions    : show Edit/Delete buttons (admin only)
function renderTable(data, containerId, limit, actions) {
  const el = document.getElementById(containerId);

  if (data.length === 0) {
    el.innerHTML = '<div class="empty-state">No transactions found.</div>';
    return;
  }

  const rows = limit ? data.slice(0, limit) : data;

  // Build the HTML string
  let html = `
    <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th class="hide-mobile">Category</th>
          <th>Type</th>
          <th>Amount</th>
          ${actions ? "<th>Actions</th>" : ""}
        </tr>
      </thead>
      <tbody>
  `;

  rows.forEach(t => {
    const isIncome = t.type === "income";
    html += `
      <tr>
        <td>${fmtDate(t.date)}</td>
        <td>${t.description}</td>
        <td class="hide-mobile"><span class="cat-pill">${t.category}</span></td>
        <td><span class="badge badge-${t.type}">${t.type}</span></td>
        <td class="${isIncome ? "amt-income" : "amt-expense"}">
          ${isIncome ? "+" : "−"}${money(t.amount)}
        </td>
        ${actions ? `
          <td>
            <button class="action-btn" onclick="openEdit(${t.id})">Edit</button>
            <button class="action-btn del" onclick="deleteTx(${t.id})">Delete</button>
          </td>
        ` : ""}
      </tr>
    `;
  });

  html += `</tbody></table></div>`;
  el.innerHTML = html;
}

// Render the Dashboard page
function renderDashboard() {
  renderCards();
  // Sort newest first, show only 5
  const sorted = [...transactions].sort((a, b) => b.date.localeCompare(a.date));
  renderTable(sorted, "recent-transactions", 5, false);
}

// Render the Transactions page (with current filter/sort values)
function renderTransactions() {
  const search  = document.getElementById("search-input").value.toLowerCase();
  const type    = document.getElementById("filter-type").value;
  const cat     = document.getElementById("filter-category").value;
  const sortBy  = document.getElementById("sort-by").value;

  // 1. Copy array
  let list = [...transactions];

  // 2. Apply filters
  if (search) list = list.filter(t =>
    t.description.toLowerCase().includes(search) ||
    t.category.toLowerCase().includes(search)
  );
  if (type !== "all") list = list.filter(t => t.type === type);
  if (cat  !== "all") list = list.filter(t => t.category === cat);

  // 3. Sort
  list.sort((a, b) => {
    if (sortBy === "date-desc")   return b.date.localeCompare(a.date);
    if (sortBy === "date-asc")    return a.date.localeCompare(b.date);
    if (sortBy === "amount-desc") return b.amount - a.amount;
    if (sortBy === "amount-asc")  return a.amount - b.amount;
    return 0;
  });

  renderTable(list, "all-transactions", null, role === "admin");
}

// Fill the category filter dropdown with unique values from data
function fillCategories() {
  const sel  = document.getElementById("filter-category");
  const cats = [...new Set(transactions.map(t => t.category))].sort();
  sel.innerHTML = `<option value="all">All Categories</option>`;
  cats.forEach(c => sel.innerHTML += `<option value="${c}">${c}</option>`);
}

// Render Insights page
function renderInsights() {
  const monthly   = monthlyData();
  const spending  = byCategory();
  const thisMonth = monthly[monthly.length - 1];
  const lastMonth = monthly[monthly.length - 2] || { income: 0, expense: 0 };
  const savings   = thisMonth.income - thisMonth.expense;
  const prevSav   = lastMonth.income - lastMonth.expense;
  const diff      = savings - prevSav;

  // Top spending category
  let topCat = "—", topAmt = 0;
  Object.entries(spending).forEach(([cat, amt]) => {
    if (amt > topAmt) { topAmt = amt; topCat = cat; }
  });

  const avgExp = monthly.reduce((s, m) => s + m.expense, 0) / monthly.length;

  // Insight card data
  const cards = [
    {
      label: "Top Spending Category",
      value: topCat,
      desc:  money(topAmt) + " spent"
    },
    {
      label: "This Month Savings",
      value: money(Math.abs(savings)),
      desc:  savings >= 0 ? "Income exceeded expenses" : "Expenses exceeded income",
      color: savings >= 0 ? "var(--green)" : "var(--red)"
    },
    {
      label: "vs Last Month",
      value: (diff >= 0 ? "+" : "") + money(diff),
      desc:  diff >= 0 ? "Better than last month" : "Lower than last month",
      color: diff >= 0 ? "var(--green)" : "var(--red)"
    },
    {
      label: "Avg Monthly Expense",
      value: money(avgExp),
      desc:  "Over last 6 months"
    },
    {
      label: "Total Transactions",
      value: transactions.length,
      desc:  transactions.filter(t => t.type === "income").length + " income, " +
             transactions.filter(t => t.type === "expense").length + " expenses"
    },
    {
      label: "Income This Month",
      value: money(thisMonth.income),
      desc:  "Earned in " + thisMonth.month,
      color: "var(--green)"
    }
  ];

  document.getElementById("insights-grid").innerHTML = cards.map(c => `
    <div class="insight-card">
      <div class="insight-label">${c.label}</div>
      <div class="insight-value" ${c.color ? `style="color:${c.color}"` : ""}>${c.value}</div>
      <div class="insight-desc">${c.desc}</div>
    </div>
  `).join("");

  // Monthly comparison table
  let tbl = `
    <div class="table-wrapper">
    <table>
      <thead>
        <tr><th>Month</th><th>Income</th><th>Expenses</th><th>Savings</th></tr>
      </thead>
      <tbody>
  `;

  [...monthly].reverse().forEach(m => {
    const sav = m.income - m.expense;
    tbl += `
      <tr>
        <td>${m.month}</td>
        <td class="col-income">${money(m.income)}</td>
        <td class="col-expense">${money(m.expense)}</td>
        <td class="${sav >= 0 ? "col-pos" : "col-neg"}">${sav >= 0 ? "+" : ""}${money(sav)}</td>
      </tr>
    `;
  });

  tbl += `</tbody></table></div>`;
  document.getElementById("monthly-comparison").innerHTML = tbl;
}

// Render all pages
function renderAll() {
  fillCategories();
  renderDashboard();
  renderTransactions();
  renderInsights();
}


/* ================================================================
   6. MODAL — popup form for Add / Edit
================================================================ */

function openAdd() {
  editingId = null;
  document.getElementById("modal-title").textContent = "Add Transaction";
  document.getElementById("transaction-form").reset();
  document.getElementById("form-date").value = new Date().toISOString().slice(0, 10);
  document.getElementById("modal-overlay").classList.remove("hidden");
}

function openEdit(id) {
  const tx = transactions.find(t => t.id === id);
  if (!tx) return;
  editingId = id;
  document.getElementById("modal-title").textContent = "Edit Transaction";
  document.getElementById("form-desc").value     = tx.description;
  document.getElementById("form-amount").value   = tx.amount;
  document.getElementById("form-type").value     = tx.type;
  document.getElementById("form-category").value = tx.category;
  document.getElementById("form-date").value     = tx.date;
  document.getElementById("modal-overlay").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal-overlay").classList.add("hidden");
}

// Handle form submit — add or update
function handleSubmit(e) {
  e.preventDefault(); // prevent page from reloading

  const desc     = document.getElementById("form-desc").value.trim();
  const amount   = parseFloat(document.getElementById("form-amount").value);
  const type     = document.getElementById("form-type").value;
  const category = document.getElementById("form-category").value;
  const date     = document.getElementById("form-date").value;

  if (!desc || !amount || !date) { toast("Please fill all fields"); return; }

  if (editingId !== null) {
    // Update existing
    const i = transactions.findIndex(t => t.id === editingId);
    transactions[i] = { id: editingId, date, description: desc, category, type, amount };
    toast("Transaction updated");
  } else {
    // Add new
    transactions.push({ id: nextId++, date, description: desc, category, type, amount });
    toast("Transaction added");
  }

  save();
  closeModal();
  renderAll();
}

// Delete a transaction
function deleteTx(id) {
  if (!confirm("Delete this transaction?")) return;
  transactions = transactions.filter(t => t.id !== id);
  save();
  renderAll();
  toast("Deleted");
}


/* ================================================================
   7. EXPORT CSV
================================================================ */

function exportCSV() {
  let csv = "Date,Description,Category,Type,Amount\n";
  transactions.forEach(t => {
    csv += `${t.date},"${t.description}",${t.category},${t.type},${t.amount}\n`;
  });
  const a    = document.createElement("a");
  a.href     = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
  a.download = "fintrack.csv";
  a.click();
  toast("Exported");
}


/* ================================================================
   8. PAGE NAVIGATION
================================================================ */

const PAGE_META = {
  dashboard:    { title: "Dashboard",    sub: "Your financial overview"              },
  transactions: { title: "Transactions", sub: "Browse and manage your transactions"  },
  insights:     { title: "Insights",     sub: "Patterns in your spending"            }
};

function switchPage(id) {
  // Hide all pages, show the one we want
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(`page-${id}`).classList.remove("hidden");

  // Update sidebar active link
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.page === id);
  });

  // Update topbar text
  document.getElementById("page-title").textContent    = PAGE_META[id].title;
  document.getElementById("page-subtitle").textContent = PAGE_META[id].sub;

  // Close sidebar on mobile
  document.getElementById("sidebar").classList.remove("open");
}


/* ================================================================
   9. ROLE MANAGEMENT
================================================================ */

function applyRole(r) {
  role = r;
  document.getElementById("role-badge").textContent = r === "admin" ? "Admin Mode" : "Viewer Mode";
  // Show or hide admin-only elements
  document.querySelectorAll(".admin-only").forEach(el => {
    el.classList.toggle("hidden", r !== "admin");
  });
  renderTransactions(); // refresh table to show/hide action buttons
}


/* ================================================================
   10. DARK MODE
================================================================ */

function toggleDark() {
  isDark = !isDark;
  document.body.classList.toggle("dark", isDark);
  document.getElementById("dark-mode-btn").textContent = isDark ? "Light" : "Dark";
  localStorage.setItem("ft_dark", isDark ? "1" : "0");
}


/* ================================================================
   11. EVENT LISTENERS — connect UI to functions
================================================================ */

function setupListeners() {

  // Sidebar navigation
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      switchPage(item.dataset.page);
    });
  });

  // Role dropdown
  document.getElementById("role-select").addEventListener("change", e => {
    applyRole(e.target.value);
    toast("Switched to " + (e.target.value === "admin" ? "Admin" : "Viewer") + " mode");
  });

  // Dark mode
  document.getElementById("dark-mode-btn").addEventListener("click", toggleDark);

  // Mobile menu
  document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("open");
  });

  // Transactions filters
  document.getElementById("search-input").addEventListener("input",   renderTransactions);
  document.getElementById("filter-type").addEventListener("change",   renderTransactions);
  document.getElementById("filter-category").addEventListener("change", renderTransactions);
  document.getElementById("sort-by").addEventListener("change",       renderTransactions);

  // Add button (admin)
  document.getElementById("add-btn").addEventListener("click", openAdd);

  // Export
  document.getElementById("export-btn").addEventListener("click", exportCSV);

  // Modal close
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", e => {
    if (e.target.id === "modal-overlay") closeModal();
  });

  // Form submit
  document.getElementById("transaction-form").addEventListener("submit", handleSubmit);
}


/* ================================================================
   12. INIT — runs once when the page loads
================================================================ */

document.addEventListener("DOMContentLoaded", () => {

  // Load saved data
  load();

  // Restore dark mode preference
  if (localStorage.getItem("ft_dark") === "1") {
    isDark = true;
    document.body.classList.add("dark");
    document.getElementById("dark-mode-btn").textContent = "Light";
  }

  // Attach all event listeners
  setupListeners();

  // Render everything
  renderAll();
});
