# 🌞 Solar Management System

A web application to manage solar installation business operations like customers, inventory, quotations, workers, and tasks.

---

## 🚀 Features

### 👤 Customer Management

* Add, view, and update customer details
* Dynamic customer profiles
* Track progress and status

### 📦 Inventory Management

* Add, edit, and delete inventory items
* Track stock quantity and minimum stock level
* Automatic total value calculation
* Low stock indication

### 📊 Dashboard

* Overview of customers, inventory, and activities
* Real-time data updates

### 🧾 Quotation System

* Generate solar quotations dynamically
* Auto calculation of:

  * Connected Load
  * Daily Consumption
  * Recommended System
* Display full quotation details

### 👷 Worker Management

* Add and manage workers
* Assign tasks to workers
* Track assigned tasks

### 📝 Forms & Data Collection

* Customer profile form
* Digital signature support
* Data ready for API integration

### 📤 Sharing Features

* Copy form link
* Share profile form via WhatsApp

### 🎨 UI/UX

* Clean and responsive UI using Tailwind CSS
* Reusable components using map functions
* Modal-based forms
* Toast/notification support

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** Tailwind CSS
* **Routing:** React Router
* **State Management:** React Hooks
* **API Handling:** Fetch API
* **Backend:** Node.js / Express (API-based)
* **Environment Config:** Vite (.env)

---

## 🔗 API Features

* Create, Read, Update, Delete (CRUD)
* Inventory APIs
* Customer APIs
* Task assignment APIs

---

## 📁 Project Structure

```
src/
 ├── components/
 ├── pages/
 ├── api/
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ Setup Instructions

1. Clone the repository:

```
git clone <your-repo-link>
```

2. Install dependencies:

```
npm install
```

3. Create `.env` file:

```
VITE_API_BASE_URL=http://localhost:5000/api
```

4. Run the project:

```
npm run dev
```

---

## 📌 Future Improvements

* Authentication system
* Role-based access (Admin / Worker)
* Export quotation as PDF
* Notifications system
* Search & filters with pagination

---

## 🤝 Contribution

Feel free to fork and improve the project.

---

## 📧 Contact

For any queries or suggestions, feel free to connect.
