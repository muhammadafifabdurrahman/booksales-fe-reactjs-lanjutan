import { BrowserRouter, Routes, Route } from "react-router-dom";

// 🌐 PUBLIC
import PublicLayout from "./layouts/public";
import Home from "./pages/public";
import Books from "./pages/public/books";

// 🔐 AUTH
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

// ⚙️ ADMIN
import AdminLayout from "./layouts/admin";
import Dashboard from "./pages/admin";
import AdminBooks from "./pages/admin/books";
import BookCreate from "./pages/admin/books/create";

// 🏷️ GENRES
import AdminGenres from "./pages/admin/genres";
import GenreCreate from "./pages/admin/genres/create";

// 👨‍💼 AUTHORS
import AdminAuthors from "./pages/admin/authors";
import AuthorCreate from "./pages/admin/authors/create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🌐 PUBLIC ROUTES */}
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
        </Route>

        {/* 🔑 AUTH ROUTES */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* ⚙️ ADMIN ROUTES */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />

          {/* 📚 BOOKS */}
          <Route path="books">
            <Route index element={<AdminBooks />} />
            <Route path="create" element={<BookCreate />} />
          </Route>

          {/* 🏷️ GENRES */}
          <Route path="genres">
            <Route index element={<AdminGenres />} />
            <Route path="create" element={<GenreCreate />} />
          </Route>

          {/* 👨‍💼 AUTHORS */}
          <Route path="authors">
            <Route index element={<AdminAuthors />} />
            <Route path="create" element={<AuthorCreate />} />
          </Route>
        </Route>

        {/* 🚫 NOT FOUND */}
        <Route
          path="*"
          element={
            <h1 className="text-center text-2xl text-red-500 mt-10">
              404 | Page Not Found
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
