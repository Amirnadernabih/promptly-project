# ============================
# 🌐 Promptly Project Setup
# ============================

# 1. Clone the repository
git clone https://github.com/Amirnadernabih/promptly-project.git
cd stunning-project

# ============================
# 📁 Backend Setup (NestJS + MongoDB)
# ============================

cd server

# 2. Install dependencies
npm install

# 3. Create .env file
# You'll need a MongoDB URI (can use MongoDB Atlas or local)
touch .env

# .env content:
# MONGODB_URI=mongodb://localhost:27017/stunning-db

# 4. Start the server
npm run start:dev

# Server will be running on http://localhost:5000

# ============================
# 🎨 Frontend Setup (Next.js + TailwindCSS)
# ============================

cd ../client

# 5. Install dependencies
npm install

# 6. Run the development server
npm run dev

# Frontend will be running on http://localhost:3000

# ============================
# ✅ Access the App
# ============================
# 1. Open your browser and go to: http://localhost:3000
# 2. Type in an idea like "Landing page for bakery"
# 3. Click "Generate Website Sections"
# 4. View the styled sections loaded from MongoDB









## ⚠️ Limitations / Downsides

- 🔒 **No Authentication**  
  The application is fully open — any user can hit the API endpoint and fetch stored sections. No auth, validation, or rate limiting exists.

- 📄 **Static Content Only**  
  Section generation is not dynamic or AI-powered — it fetches hardcoded dummy data from MongoDB based on keyword matching.

- 🎨 **No Visual Section Builder**  
  There's no UI/UX interface to customize, edit, or design sections beyond viewing them as HTML.

- 🧪 **No Testing**  
  Neither backend nor frontend has unit or integration tests, making changes prone to breaking without notice.

- ⚙️ **No Docker or Deployment Config**  
  The project is only optimized for local development (`localhost`) and doesn't include Dockerfiles, Vercel, or production hosting strategies.

- ❌ **No Admin Panel**  
  You can't add/edit/delete sections from an interface — everything must be manually inserted into the database via MongoDB Compass or script.

- 🧠 **Misleading Naming**  
  The term `generateWithClaude` suggests integration with an AI model (like Claude), but it simply queries static data.

- 🚫 **No Form Submission Functionality**  
  Contact sections are visually styled but don't include working form handlers or email integrations.

- 💡 **Limited Scalability**  
  Since it's based on keyword string filtering, it cannot scale to support 100s of section types or ideas without bloating the dataset.

