import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../pages/AuthContext'; // Import the custom hook
import { auth } from '../../firebase'; // Import auth from your Firebase setup
import '../../styles/header.css'; // Make sure this path is correct
import { Navbar } from '../Navbar/Navbar';

const Header = () => {
  const currentUser = useAuth(); // Get the current user

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <header className="header">
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +94 764810411
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                {!currentUser ? (
                  <Link to="/LoginSignup" className="link-style">
                    <i className="ri-login-box-line"></i> Sign In
                  </Link>
                ) : (
                  <Link to="#" className="link-style sign-out" onClick={handleSignOut}>
                    <i className="ri-logout-box-line"></i> Sign Out
                  </Link>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    <span>
                      Ravishan <br /> car rental
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>SriLanka</h4>
                  <h6>Colombo City</h6>
                </div>
              </div>
            </Col>
            <Col lg="2" md="3" sm="0" className="d-flex align-items-center justify-content-end">
              <button className="header__btn btn">
                <Link to="/Contact">
                  <i className="ri-phone-line"></i> Make a Call
                </Link>
              </button>
            </Col>
            <Col lg="3" md="3" sm="0" className="d-flex align-items-center justify-content-end">
              {currentUser && (
                <Link to="/Adpanel" className="link-style">
                  <i className="ri-admin-line"></i> Admin Panel
                </Link>
              )}
            </Col>
          </Row>
        </Container>
      </div>

      <Navbar />
    </header>
  );
};

export default Header;
