import React, {Component} from 'react'
import Logo from "./logo/Logo";
import BtnSearch from "./btn_search/BtnSearch";
import IntputSearchGroup from "./intput-search-group/intput-search-group";
import BtnCart from "./btn_cart/BtnCart";
import Order from "./order/order";
import BtnReport from "./btn_report/BtnReport";
import BtnNews from "./btn_news/BtnNews";
import BtnCheckin from "./btn_checkin/BtnCheckin";
import BtnCheckout from "./btn_checkout/BtnCheckout";
import ModalCheckin from "./modal_checkin/ModalCheckin";

export default class HeaderMain extends Component {
     constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

    render() {
        return <div className="conteiner">
            <nav className="navbar d-flex sticky-top navbar-expand-lg navbar-dark bg-secondary py-0 px-1 m-auto">
                <Logo/>
                <BtnSearch/>
                <IntputSearchGroup/>
                <button className="navbar-toggler custom-togler-icon" type="button" data-toggle="collapse"
                        data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false"
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <div className="custom-direction-bun mr-auto nav nav-pills nav-fill">
                        <BtnCart/>
                        <Order/>
                        <BtnReport/>
                        <BtnNews/>
                    </div>
                    <div className="custom-direction-bun nav nav-pills nav-fill">
                        <BtnCheckin/>
                        <BtnCheckout/>
                        <ModalCheckin/>
                    </div>
                </div>
            </nav>

        </div>
    }
}

