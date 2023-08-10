import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/img/logo.png";
export default function Header() {
  return (
    <>
      <div className='container pt-2'>
        <nav className='navbar navbar-expand-lg navbar-light pt-1 pt-lg-4 pb-2'>
          <div className='container-fluid nav-inner'>
            <h1 className='logo me-auto cursor-pointer'>
              <Link className='navbar-brand' href='/' legacyBehavior>
                <Image src={logo} width={100} alt='logo' />
              </Link>
            </h1>

            <button
              class='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0 main-navBar'>
                <li class='nav-item'>
                  <Link
                    className='nav-link active'
                    aria-current='page'
                    href='#'
                  >
                    Solution
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' href='#'>
                    Learn
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' href='#'>
                    Company
                  </Link>
                </li>
                <li className='main-btn'>
                  <Link href='#'>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
