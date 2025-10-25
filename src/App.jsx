import { BrowserRouter, Routes, Route } from "react-router-dom";

// 🌐 PUBLIC
import PublicLayout from "./layouts/public";
import Home from "./pages/public";
import Books from "./pages/public/books";
import Show from "./pages/public/books/show";

// 🔐 AUTH
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

// ⚙️ ADMIN
import AdminLayout from "./layouts/admin";
import Dashboard from "./pages/admin";
import AdminBooks from "./pages/admin/books";
import BookCreate from "./pages/admin/books/create";
import BookEdit from "./pages/admin/books/edit";

// 🏷️ GENRES
import AdminGenres from "./pages/admin/genres";
import GenreCreate from "./pages/admin/genres/create";
import GenreEdit from "./pages/admin/genres/edit";

// 👨‍💼 AUTHORS
import AdminAuthors from "./pages/admin/authors";
import AuthorCreate from "./pages/admin/authors/create";
import AuthorEdit from "./pages/admin/authors/edit";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🌐 PUBLIC ROUTES */}
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />

          <Route path="books">
            <Route index element={<Books />} />
            <Route path="show/:id" element={<Show />} />
          </Route>
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
            <Route path="edit/:id" element={<BookEdit />} />
          </Route>

          {/* 🏷️ GENRES */}
          <Route path="genres">
            <Route index element={<AdminGenres />} />
            <Route path="create" element={<GenreCreate />} />
            <Route path="edit/:id" element={<GenreEdit />} />
          </Route>

          {/* 👨‍💼 AUTHORS */}
          <Route path="authors">
            <Route index element={<AdminAuthors />} />
            <Route path="create" element={<AuthorCreate />} />
            <Route path="edit/:id" element={<AuthorEdit />} />
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
