import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import login from "../../Images/login.png";
import cart from "../../Images/cart.png";
import { getCartItem } from "../../redux/actions/cartAction";
import { useDispatch, useSelector } from "react-redux";

const NavBarLogin = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser("");
    window.location.href = "/login";
  };

  const [searchWord, setSearchWord] = useState(
    localStorage.getItem("word") || "",
  );

  useEffect(() => {
    if (searchWord) {
      localStorage.setItem("word", searchWord);
    } else {
      localStorage.removeItem("word");
    }

    window.dispatchEvent(new Event("searchChanged"));
  }, [searchWord]);

  // =============cart length =================

  const [loading, setLoading] = useState(true);
  const [cartLength, setCartLength] = useState(0);

  const dispatch = useDispatch();

useEffect(() => {
  const get = async () => {
    if (user?.role === "user") {
      setLoading(true);

      try {
        await dispatch(getCartItem());
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
      setCartLength(0);
    }
  };

  get();
}, [user, dispatch]);

  const cartRes = useSelector((state) => state.allCart.cartitem);

  console.log(cartRes);

  useEffect(() => {
    if (loading === false) {
      if (cartRes.status === "success") {
        setCartLength(cartRes.numOfCartItems);
      }
    }
  }, [loading]);

  console.log(cartLength);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} className="logo" alt="logp" />
          </a>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className=" w-100 py-2 position-relative collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <form className="d-flex me-auto w-100 mx-3 " role="search">
              <input
                className=" form-control me-3 text-center"
                type="search"
                placeholder="بحث"
                aria-label="Search"
                onChange={(e) => setSearchWord(e.target.value)}
                value={searchWord}
              />
            </form>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex gap-3 justify-content-center align-items-center">
              {user != "" ? (
                <li
                  className="nav-item dropdown"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "#fff" }}
                  >
                    {user.name}
                  </a>

                  {user.role === "admin" ? (
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/admin/product">
                          لوحة التحكم
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a onClick={logout} className="dropdown-item" href="#">
                          تسجيل خروج
                        </a>
                      </li>
                    </ul>
                  ) : (
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/user/profile">
                          الصفحه الشخصيه
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a onClick={logout} className="dropdown-item" href="#">
                          تسجيل خروج
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <a
                  href="/login"
                  className="d-flex justify-content-center mt-2 align-items-center gap-1 text-white"
                >
                  <img src={login} className="login-img" alt="" />
                  <p>دخول</p>
                </a>
              )}

              <a
                href="/cart"
                className="d-flex justify-content-center mt-2 align-items-center gap-1 position-relative text-white"
              >
                <img src={cart} className="login-img" alt="" />
                <p>العربه</p>
                <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                  {cartLength}
                  <span class="visually-hidden">unread messages</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBarLogin;
