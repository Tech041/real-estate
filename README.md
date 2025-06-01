LuxLife - Property Listing Platform
Welcome to LuxLife, a premium real estate platform designed to simplify property transactions. Users can register, log in, list properties, edit existing listings, and delete them seamlessly.
Features
- 🔐 User Authentication: Secure registration, login, and logout functionality using  token stored in httpOnly cookies.
- 🏡 Property Listing: Users can add new listings with detailed descriptions, images, and pricing.
- ✏️ Editing Listings: Easily modify property details like description.
- ❌ Delete Listings: Remove unwanted property listings from your account.
- 🔍 Search & Filter: Quickly find properties based on location and name.
- 📱 Responsive UI: Mobile-friendly design with an intuitive interface

- Tech Stack
LuxLife is built using modern web technologies:
- ⚛️ Frontend: React, Tailwind CSS
- 🔧 Backend: Node.js, Express
- 💾 Database: MongoDB
- 🔑 Authentication: JWT (JSON Web Tokens)
- 🌐 API Handling: Axios


Installation & Setup
Follow these steps to run LuxLife on your local machine:
1. Clone the Repository
git clone https://github.com/real-estate.git
cd luxlife

2. Install Dependencies
3. npm install
3. Set Up Environment Variables
Create a .env file in the root and define
4. Start the Backend Server
npm run server
5. Start the Frontend

API Endpoints
| Method | Endpoint | Description | 
| POST | /api/auth/register | Register new user | 
| POST | /api/auth/login | Login user | 
| GET | /api/listing | Fetch all listings | 
| POST | /api/listing | Add a new listing | 
| PUT | /api/edit-listing/:id | Edit a listing | 
| DELETE | /api/delete-listing/:id | Delete a listing | 




6. npm run dev
To start the React app
