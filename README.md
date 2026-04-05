# 💰 FinTrack – Personal Finance Dashboard

A clean Finance dashboard built with **plain HTML, CSS, and JavaScript** — no frameworks, no build tools, just open and go!

---

## 🚀 How to Run

1. Download or clone this project folder
2. Open `index.html` in any web browser (Chrome, Firefox, Edge, Safari)
3. That's it! No installation, no terminal commands needed.

---

## 📁 Project Structure

```
Zorvyn project/
├── index.html   ← Page structure (the "skeleton")
├── style.css    ← Visual styling (the "skin")
├── app.js       ← Logic & interactivity (the "brain")
└── README.md    ← This file
```

Each file is **heavily commented** to explain every concept as you read through it.

---

## ✨ Features

### 📊 Dashboard
- **Summary cards** — Total Balance, Income, and Expenses at a glance
- **Bar chart** — Visual monthly income vs. expenses (last 6 months), drawn with pure CSS
- **Donut chart** — Spending breakdown by category, drawn with SVG math
- **Recent transactions** — Last 5 transactions with a link to view all

### 💳 Transactions
- Full **sortable & filterable** transaction list
- **Search** by description or category
- Filter by **type** (income/expense) and **category**
- Sort by date or amount
- **Export to CSV** — download your data as a spreadsheet

### 💡 Insights
- Highest spending category
- This month's savings
- Comparison vs. last month
- Average monthly expense
- Monthly comparison table (newest first)

### 🔐 Role-Based UI
Switch between roles using the dropdown in the sidebar:
- **Viewer** — Read-only. No Add/Edit/Delete buttons.
- **Admin** — Full access. Can add, edit, and delete transactions.

### 🌙 Dark Mode
Click the moon button in the top-right to toggle dark mode. Your preference is saved automatically.

### 💾 Data Persistence
Transactions and dark mode preference are saved to the browser's **Local Storage**, so data survives page refreshes.

---


## 🎨 Design Decisions

- **CSS variables** — Colors and sizes defined once at the top of `style.css`
- **CSS bar chart** — Pure CSS with height transitions for the animated bars
- **Mobile responsive** — Sidebar collapses on small screens with a hamburger menu

---

## 📝 Assumptions Made

- All data is static/mock — no real bank connection
- Dates used in the data range from Nov 2025 to Mar 2026
- "This month" refers to the most recent month in the data
- Role switching is purely a UI simulation (no authentication)
