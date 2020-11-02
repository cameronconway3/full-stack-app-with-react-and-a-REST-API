import React, {Component} from "react";
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        const {context} = this.props;
        return (
            <div className="header">
                <div className="bounds">
                    <Link to={'/'} className="header--logo">Courses</Link>
                    <nav>
                        {
                            context.authenticatedUser
                            ? (
                                <React.Fragment>
                                    <span>Welcome, {context.authenticatedUser.firstName} {context.authenticatedUser.lastName}</span>
                                    <Link className="signin" to="/signout">Sign Out</Link>
                                </React.Fragment>
                            )
                            : (
                                <React.Fragment>
                                    <Link className="signup" to="/signup">Sign Up</Link>
                                    <Link className="signin" to="/signin">Sign In</Link>
                                </React.Fragment>
                            )
                        }
                    </nav>
                </div>
          </div>
        )
    }
}

export default Header;