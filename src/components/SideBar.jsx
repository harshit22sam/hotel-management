import React from "react";
import logoimg from "../assets/img/hotel_logo.png";
import logoimg2 from "../assets/img/hotel_logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import $ from "jquery";

function SideBar() {
  return (
    <>
      <div className="main-wrapper">
        <div className="header">
          <div className="header-left">
            <a href="index.html" className="logo">
              {" "}
              <img src={logoimg} width="50" height="70" alt="logo" />{" "}
              <span className="logoclassName">HOTEL</span>{" "}
            </a>
            <a href="index.html" className="logo logo-small">
              {" "}
              <img src={logoimg2} alt="Logo" width="30" height="30" />{" "}
            </a>
          </div>
          <a href="" id="toggle_btn">
            {" "}
            <i className="fe fe-text-align-left"></i>{" "}
          </a>
          <a className="mobile_btn" id="mobile_btn">
            {" "}
            <i className="fas fa-bars"></i>{" "}
          </a>
          <ul className="nav user-menu">
            <li className="nav-item dropdown noti-dropdown">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                {" "}
                <i className="fe fe-bell"></i>{" "}
                <span className="badge badge-pill">3</span>{" "}
              </a>
              <div className="dropdown-menu notifications">
                <div className="topnav-dropdown-header">
                  {" "}
                  <span className="notification-title">Notifications</span>{" "}
                  <a href="" className="clear-noti">
                    {" "}
                    Clear All{" "}
                  </a>{" "}
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          {" "}
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="assets/img/profiles/avatar-02.jpg"
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">Carlson Tech</span>{" "}
                              has approved{" "}
                              <span className="noti-title">your estimate</span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                4 mins ago
                              </span>{" "}
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          {" "}
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="assets/img/profiles/avatar-11.jpg"
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">
                                International Software Inc
                              </span>{" "}
                              has sent you a invoice in the amount of{" "}
                              <span className="noti-title">$218</span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                6 mins ago
                              </span>{" "}
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          {" "}
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="assets/img/profiles/avatar-17.jpg"
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">John Hendry</span>{" "}
                              sent a cancellation request{" "}
                              <span className="noti-title">
                                Apple iPhone XR
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                8 mins ago
                              </span>{" "}
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          {" "}
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="assets/img/profiles/avatar-13.jpg"
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">
                                Mercury Software Inc
                              </span>{" "}
                              added a new product{" "}
                              <span className="noti-title">
                                Apple MacBook Pro
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                12 mins ago
                              </span>{" "}
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  {" "}
                  <a href="#">View all Notifications</a>{" "}
                </div>
              </div>
            </li>
            <li className="nav-item dropdown has-arrow">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                {" "}
                <span className="user-img">
                  <img
                    className="rounded-circle"
                    src="assets/img/profiles/avatar-01.jpg"
                    width="31"
                    alt="Soeng Souy"
                  />
                </span>{" "}
              </a>
              <div className="dropdown-menu">
                <div className="user-header">
                  <div className="avatar avatar-sm">
                    {" "}
                    <img
                      src="assets/img/profiles/avatar-01.jpg"
                      alt="User Image"
                      className="avatar-img rounded-circle"
                    />{" "}
                  </div>
                  <div className="user-text">
                    <h6>Soeng Souy</h6>
                    <p className="text-muted mb-0">Administrator</p>
                  </div>
                </div>{" "}
                <a className="dropdown-item" href="profile.html">
                  My Profile
                </a>{" "}
                <a className="dropdown-item" href="settings.html">
                  Account Settings
                </a>{" "}
                <a className="dropdown-item" href="login.html">
                  Logout
                </a>{" "}
              </div>
            </li>
          </ul>
          <div className="top-nav-search">
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Search here"
              />
              <button className="btn" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="sidebar" id="sidebar">
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="active">
                  {" "}
                  <a href="index.html">
                    <i className="fas fa-tachometer-alt"></i>{" "}
                    <span>Dashboard</span>
                  </a>{" "}
                </li>
                <li className="list-divider"></li>
                <li className="submenu">
                  {" "}
                  <a href="#">
                    <i className="fas fa-suitcase"></i>{" "}
                    <span>Booking
                      {/* <div class="list-menu">
                        <div class="list-menu__title active active-on">
                          Navigation
                        </div>
                        <ul class="list-menu__items">
                          <li class="active">
                            <a className="anc" href="#">
                              Dashboard #1
                            </a>
                          </li>
                          <li>
                            <a className="anc" href="#">
                              Dashboard #2
                            </a>
                          </li>
                          <li>
                            <a href="#">Dashboard #3</a>
                          </li>
                          <li>
                            <a href="#">Dashboard #4</a>
                          </li>
                          <li>
                            <a href="#">Dashboard #5</a>
                          </li>
                        </ul>
                      </div> */}
                    </span>{" "}
                    {/* <span className="menu-arrow"></span> */}
                  </a>
                </li>
                <li className="submenu">
                  {" "}
                  <a href="#">
                    <i className="fas fa-user"></i>{" "}
                    <span>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          className="check"
                        >
                          Housekeeping
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Add Iteam
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            All Iteam
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Add Order
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            All Orders
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>{" "}
                    </span>{" "}
                  </a>
                </li>
                <li className="submenu">
                  {" "}
                  <a href="#">
                    <i className="fas fa-key"></i>{" "}
                    <span>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          className="check"
                        >
                          Laundry
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Add Iteam
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            All Iteam
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Add Order
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            All Orders
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </span>{" "}
                    {/* <span className="menu-arrow"></span> */}
                  </a>
                </li>
                <li className="submenu">
                  {" "}
                  <a href="#">
                    <i className="fas fa-user"></i>{" "}
                    <span>
                      {" "}
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          className="check"
                        >
                          Reports
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Transactions Report
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Check-Outs Report
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Expense Report
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Stock Report
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>{" "}
                    </span>{" "}
                    {/* <span className="menu-arrow"></span> */}
                  </a>
                </li>
                <li className="submenu">
                  {" "}
                  <a href="#">
                    <i className="far fa-money-bill-alt"></i>{" "}
                    <span>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          className="check"
                        >
                          Customer
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Add Customer
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            All Customers
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Add Order
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            All Orders
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </span>
                  </a>{" "}
                </li>
                <li className="submenu">
                  {" "}
                  <a href="#">
                    <i className="fas fa-share-alt"></i>{" "}
                    <span>
                      {" "}
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          className="check"
                        >
                          Food Iteams
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Add Food Category
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            All Food Category
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Add Food Iteam
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            All Food Iteam
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>{" "}
                    </span>{" "}
                    {/* <span className="menu-arrow"></span> */}
                  </a>
                </li>
                <li className="submenu">
                  {" "}
                  <a href="#">
                    <i className="fas fa-user"></i>{" "}
                    <span>
                      {" "}
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          className="check"
                        >
                          Skocks
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Add Product
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            All Products
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Add Stocks
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Stocks History
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>{" "}
                    </span>{" "}
                  </a>
                </li>
                <li className="submenu">
                  {" "}
                  <a href="#">
                    <i className="far fa-money-bill-alt"></i>{" "}
                    <span>
                      {" "}
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          className="check"
                        >
                          Rooms
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Add Rooms
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            All Room Type
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Add Amenities
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            All Amenities
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>{" "}
                    </span>
                  </a>
                </li>
                <li className="submenu">
                  {" "}
                  <a href="#">
                    <i className="fas fa-book"></i>{" "}
                    <span>
                      {" "}
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          className="check"
                        >
                          Expense
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Add Category
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            All Category
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Add Expense
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            All Expense
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>{" "}
                    </span>{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="calendar.html">
                    <i className="fas fa-calendar-alt"></i>{" "}
                    <span>Calendar</span>
                  </a>{" "}
                </li>
                <li className="submenu">
                  {" "}
                  <a href="#">
                    <i className="fe fe-table"></i> <span> Blog </span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul className="submenu_className">
                    <li>
                      <a href="blog.html">Blog </a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Veiw </a>
                    </li>
                    <li>
                      <a href="add-blog.html">Add Blog </a>
                    </li>
                    <li>
                      <a href="edit-blog.html">Edit Blog </a>
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="assets.html">
                    <i className="fas fa-cube"></i> <span>Assests</span>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="activities.html">
                    <i className="far fa-bell"></i> <span>Activities</span>
                  </a>{" "}
                </li>
                <li className="submenu">
                  {" "}
                  <a href="#">
                    <i className="fe fe-table"></i> <span> Reports </span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul className="submenu_className">
                    <li>
                      <a href="expense-reports.html">Expense Report </a>
                    </li>
                    <li>
                      <a href="invoice-reports.html">Invoice Report </a>
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="settings.html">
                    <i className="fas fa-cog"></i> <span>Settings</span>
                  </a>{" "}
                </li>
                <li className="list-divider"></li>
                <li className="menu-title mt-3">
                  {" "}
                  <span>UI ELEMENTS</span>{" "}
                </li>
                <li className="submenu">
                  {" "}
                  <a href="#">
                    <i className="fas fa-laptop"></i> <span> Components </span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul className="submenu_className">
                    <li>
                      <a href="uikit.html">UI Kit </a>
                    </li>
                    <li>
                      <a href="typography.html">Typography </a>
                    </li>
                    <li>
                      <a href="tabs.html">Tabs </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  {" "}
                  <a href="#">
                    <i className="fas fa-edit"></i> <span> Forms </span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul className="submenu_className">
                    <li>
                      <a href="form-basic-inputs.html">Basic Input </a>
                    </li>
                    <li>
                      <a href="form-input-groups.html">Input Groups </a>
                    </li>
                    <li>
                      <a href="form-horizontal.html">Horizontal Form </a>
                    </li>
                    <li>
                      <a href="form-vertical.html">Vertical Form </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  {" "}
                  <a href="#">
                    <i className="fas fa-table"></i> <span> Tables </span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul className="submenu_className">
                    <li>
                      <a href="tables-basic.html">Basic Table </a>
                    </li>
                    <li>
                      <a href="tables-datatables.html">Data Table </a>
                    </li>
                  </ul>
                </li>
                <li className="list-divider"></li>
                <li className="menu-title mt-3">
                  {" "}
                  <span>EXTRAS</span>{" "}
                </li>
                <li className="submenu">
                  {" "}
                  <a href="#">
                    <i className="fas fa-columns"></i> <span> Pages </span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul className="submenu_className">
                    <li>
                      <a href="login.html">Login </a>
                    </li>
                    <li>
                      <a href="register.html">Register </a>
                    </li>
                    <li>
                      <a href="forgot-password.html">Forgot Password </a>
                    </li>
                    <li>
                      <a href="change-password.html">Change Password </a>
                    </li>
                    <li>
                      <a href="lock-screen.html">Lockscreen </a>
                    </li>
                    <li>
                      <a href="profile.html">Profile </a>
                    </li>
                    <li>
                      <a href="gallery.html">Gallery </a>
                    </li>
                    <li>
                      <a href="error-404.html">404 Error </a>
                    </li>
                    <li>
                      <a href="error-500.html">500 Error </a>
                    </li>
                    <li>
                      <a href="blank-page.html">Blank Page </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  {" "}
                  <a href="#">
                    <i className="fas fa-share-alt"></i>{" "}
                    <span> Multi Level </span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul className="submenu_className">
                    <li>
                      <a href="">Level 1 </a>
                    </li>
                    <li>
                      <a href="">Level 2 </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <script>
      $(document).ready(function() {
    $(".list-menu__title").on("click", function() {
        $(this).toggleClass('active-on');
        $(this).next('.list-menu__items').slideToggle();
    })
  });
      </script>
    </>
  );
}

export default SideBar;
