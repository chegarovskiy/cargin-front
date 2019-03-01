import React, {Component} from 'react'


export default class BtnCheckout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <a className="nav-link custom-navigation-color d-flex custom-btn-content" href="#">
                    <div>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                    <div className="d-lg-none d-xl-block">Выход</div>
                </a>
            </div>
        )
    }
}