import React, {useState} from 'react';
import { Collapse, Navbar, NavItem, Nav, NavbarBrand, NavbarToggler, Jumbotron} from 'reactstrap'; 
import './App.css';

function Header(){

    const [isOpen, setIsOpen] = useState(false);
    const toggle= () => setIsOpen(!isOpen);

    return(
        <React.Fragment>
            <Navbar className="Navbar" dark expand="md">
                <NavbarBrand>Welcome</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <a className="nav-link" href="https://github.com/">
                                <span className="fa fa-github fa-lg"></span> Github
                            </a>
                        </NavItem>
                        <NavItem>
                            <a className="nav-link" href="https://www.facebook.com/tech.iitd">
                                <span className="fa fa-facebook fa-lg"></span> Facebook
                            </a>
                        </NavItem>
                        <NavItem>
                            <a className="nav-link" href="https://www.instagram.com/umdevclub/?hl=en">
                                <span className="fa fa-instagram fa-lg"></span> Instagram
                            </a>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Jumbotron className="jumbotron">
                <div>
                    <p>
                        <h1>Hola Freshers</h1> <br />
                        <h3>We make cool tech stuff!</h3>
                    </p>
                </div>
            </Jumbotron>
        </React.Fragment>
    );
}

export default Header;