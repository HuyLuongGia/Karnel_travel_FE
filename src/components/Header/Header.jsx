import "./header.scss";
import logo from "../../assets/img/karnel_logo.png";
import { NavLink } from "react-router-dom";
import paths from "../../paths";
import { useState } from "react";
import "animate.css";
import { useSelector } from "react-redux";
const Header = () => {
    const { users } = useSelector((state) => state.users);
    console.log(users);

    // Scroll down Header sẽ đổi từ màu transparent thành màu xanh
    const [navbar, setNavBar] = useState(false);
    const changeBackGround = () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 80) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };
    window.addEventListener("scroll", changeBackGround);

    // Check Trang hiển thị đang ở trang nào trên navabar => Nếu đang ở trang nào chữ đó sẽ màu vàng
    const checkActive = ({ isActive }) => {
        // console.log(isActive);
        let className = "font-semibold";
        return `${className} ${isActive ? "text-yellow-300" : "text-white"}`;
    };

    /** Mở thanh menu khi ở chế độ tablet và mobile
     * - true: đang mở
     * - false: không mở
     * */
    let [open, setOpen] = useState(false);

    /**Mở login và register ở chế độ máy nhỏ */
    let [openLR, setOpenLR] = useState(false);
    return (
        <header className={navbar ? "header header__active" : "header"}>
            <div className="header__container animate__animated animate__fadeInDown">
                <nav className="border-gray-200 px-4 lg:px-6 py-2.5 ">
                    <span
                        className="check__btn"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        {open ? (
                            <i className="fa-solid fa-xmark"></i>
                        ) : (
                            <i className="fa-solid fa-bars"></i>
                        )}
                    </span>
                    <span
                        className="check__logRes"
                        onClick={() => {
                            setOpenLR(!openLR);
                        }}
                    >
                        {openLR ? (
                            <i className="fa-solid fa-xmark"></i>
                        ) : (
                            <i className="fa-regular fa-circle-user"></i>
                        )}
                    </span>
                    <div className="header__logo flex flex-wrap justify-around items-center mx-auto">
                        <NavLink to={paths.HOME} className="flex items-center">
                            <img
                                src={logo}
                                className="logo mr-3 sm:h-9"
                                alt="Logo"
                            />
                        </NavLink>
                        <div
                            className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <ul
                                className={`flex space-x-8 font-medium flex-row  ${
                                    open
                                        ? "header__menu open__menu"
                                        : "header__menu"
                                }`}
                            >
                                <li>
                                    <NavLink
                                        to="/"
                                        className={checkActive}
                                        aria-current="page"
                                    >
                                        HOME
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={paths.ABOUT_KARNEL}
                                        className={checkActive}
                                    >
                                        ABOUT US
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={paths.HOTELS}
                                        className={checkActive}
                                    >
                                        HOTEL & RESORTS
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={paths.TRAVEL}
                                        className={checkActive}
                                    >
                                        TRAVEL
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={paths.GASTRONOMY}
                                        className={checkActive}
                                    >
                                        GASTRONOMY
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={paths.AMUSEMENT}
                                        className={checkActive}
                                    >
                                        AMUSEMENT
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={paths.NEWS}
                                        className={checkActive}
                                    >
                                        NEWS
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={paths.CONTACT}
                                        className={checkActive}
                                    >
                                        CONTACT
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        {users ? (
                            <div className=" text-2xl font-bold text-orange-400">
                                <span>Hello, </span>
                                {users.taiKhoan}
                            </div>
                        ) : (
                            <>
                                <div
                                    className={`${
                                        openLR
                                            ? "header__log__res open__logRes"
                                            : "header__log__res "
                                    } flex items-center lg:order-2`}
                                >
                                    <NavLink
                                        to={paths.LOGIN}
                                        className="headerlg__item flex items-center"
                                    >
                                        <i className="fa-solid fa-circle-user text-3xl text-gray-300 mr-3"></i>
                                        {/* <i className="fa-regular fa-circle-user text-3xl text-gray-300 mr-3"></i> */}
                                        Log in
                                    </NavLink>
                                    <span className="text-gray-300 text-2xl mx-5 ">
                                        |
                                    </span>

                                    <NavLink
                                        to={paths.REGISTER}
                                        className="headerlg__item flex items-center"
                                    >
                                        <i className="fa-regular fa-circle-user text-3xl text-gray-300 mr-3"></i>
                                        Register
                                    </NavLink>
                                </div>
                            </>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
