import React, {Component} from 'react'


class BtnCart extends Component {

    render() {
        return (
            <div>
                <a className="nav-link custom-navigation-color d-flex custom-btn-content" href="#">
                    <div>

                        <i className="fas fa-shopping-cart fa-2x"></i>
                    </div>
                    <div className="d-lg-none d-xl-block px-1">Корзbyf</div>

                </a>
            </div>
        )
    }
}

export default BtnCart;