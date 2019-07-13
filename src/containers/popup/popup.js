import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './popup.css'
import {isShownPopUp} from "../../actions/popup";


class PopUp extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>{this.props.isShown === true ?
                <div className="popup-wrapper">
                    <div className="popup">
                        <div className="popup-close">
                            <div className="btn-popup-close" onClick={()=>{this.props.isShownPopUp(false)}}>
                                <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="popup-message">
                            {this.props.message.detail}
                        </div>
                        <div className="popup-ok">
                            <div className="btn-popup-ok" onClick={()=>{this.props.isShownPopUp(false)}}>OK</div>
                        </div>
                    </div>
                </div> : null
            }
            </div>
        );
    }

}

function mapStateToProps(state) {
    // console.log('+++++PopUpstate', state);
    return {
        isShown: state.popUp.isShownPopUp,
        message: state.popUp.popUpMassage,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        isShownPopUp: isShownPopUp,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);
