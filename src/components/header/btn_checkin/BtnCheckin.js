import React, {Component} from 'react'
import ModalCheckin from "../modal_checkin/ModalCheckin";




export default class BtnCheckin extends Component {
    constructor(props) {
        super(props)
        this.onBtnCheckinClick = this.onBtnCheckinClick.bind(this)

    }
    onBtnCheckinClick (){
        return(
            <h1>oooooooooooo</h1>
        )
    }

    render() {
        return (
            <div>
                <a className="nav-link custom-navigation-color d-flex custom-btn-content"
                   href="#"
                   data-toggle="modal"
                   data-target="#exampleModalCenter"
                   onClick={this.onBtnCheckinClick}>
                    <div>
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="d-lg-none d-xl-block px-1">Вход</div>
                </a>
                <ModalCheckin/>
            </div>

        )
    }
}
