import React, {Component} from 'react';
// import { Container } from 'reactstrap';
// import {render} from 'react-dom'
import { connect } from 'react-redux';
// import CarsList from "../containers/cars_list";
// import Details from "../containers/details";
// import MarksList from "../containers/marks-list"
// import ModelsList from "../containers/models-list"
// import TypesList from "../containers/types-list"
// import SubgroupList from "../containers/subgroups-list"
// import PartsList from "../containers/parts-list"
import Header from "../containers/header/header";
import Body from "../containers/body/body";
import "../styles/mystyles.css"
import PopUp from "../containers/popup/popup";


// import ModalSearch from "../containers/modal-search";




class App extends Component {


    render() {
        return (
            <div className="app">
                <PopUp/>
                {/*<HeaderMain></HeaderMain>*/}
                {/*<PartsList/>*/}
                {/*<MarksList/>*/}
                {/*<ModelsList/>*/}
                {/*<TypesList/>*/}
                {/*<SubgroupList/>*/}
                <Header/>
                <Body/>




            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}
export default connect(mapStateToProps)(App);
