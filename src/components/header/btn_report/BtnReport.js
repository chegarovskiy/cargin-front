import React, {Component} from 'react'


export default class BtnReport extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <a className="nav-link custom-navigation-color d-flex custom-btn-content" href="#">
                    <div>
                        <i className="fas fa-file"></i>
                    </div>
                    <div className="d-lg-none d-xl-block px-1">Отчеты</div>
                </a>
            </div>
        )
    }
}



