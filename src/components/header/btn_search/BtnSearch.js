import React, {Component} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Nav, NavItem, NavLink } from 'reactstrap';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getMarks} from "../../../actions/marks";
import {closeModal, TabActivator} from "../../../actions/modalSearch";
import {getModelsByMark} from "../../../actions/models";
import {getTypesByModel} from "../../../actions/types";
import {getSubgroupsByType} from "../../../actions/subgroups";
import {getPartsBySubgroup} from "../../../actions/parts";
import "./search-by-car"


class ModalSearch extends Component {

    // constructor(props) {
    // super(props);
    // }


    showMarksList(){
        return this.props.marks_all.marks.map(
            (mark) => {return (<div className="type-list-margin" key={mark.referred_id.toString()}
                                   onClick={()=>{this.props.getModelsByMark(mark)}}>
                                     <div className="item-type-car">
                                          <div className="item-type-car-head">
                                              <div ><span className="pull-left subgroups-name">{mark.name}</span></div>
                                          </div>
                                     </div>
                               </div> )})
    }

    showModelListByMark(){
      console.log('props.modelsByMark.modelsByMark',this.props.modelsByMark.modelsByMark);
        return this.props.modelsByMark.modelsByMark.map(
            (model) => {return (
                <div className="type-list-margin" key={model.referred_id.toString()}
                    onClick={()=>{this.props.getTypesByModel(model)}}>
                     <div className="item-type-car">
                          <div className="item-type-car-head">
                              <div ><span className="pull-left subgroups-name">{model.name}</span></div>
                              <div className="pull-right grups-name">{model.terms}</div>
                          </div>
                     </div>

                </div> )})
    }


    showTypeListByMark(){
       console.log('props.typesByModel.typesByModel',this.props.typesByModel.typesByModel);
       return this.props.typesByModel.typesByModel.map(
           (type) => {return(
               <div className="type-list-margin" key={type.referred_id.toString()}
                    onClick={() => {this.props.getSubgroupsByType(type)}}>
                    <div className="item-type-car">
                        <div className="item-type-car-head">
                            <div ><span className="pull-left" >{type.vol}</span></div>
                            <div className="pull-right">{type.terms}</div>
                        </div>
                        <div className="item-type-car-futer">
                            <div className=" type-car-fuel">{type.fuel}</div>
                            <div className="type-car-eng">Тип двигателя: {type.eng}</div>

                        </div>

                    </div>
               </div>

           )}
       )
    }
    showSubgroupsByType(){
      console.log('props.subgoupsByTupe.subgoupsByTupe',this.props.subgroupsByType.subgroupsByType);
      return this.props.subgroupsByType.subgroupsByType.map(
          (subgroup) => {return(
                <div className="type-list-margin" key={subgroup.referred_id.toString()}
                      onClick={() => {this.props.getPartsBySubgroup(subgroup)}}>
                    <div className="item-type-car">
                        <div className="item-type-car-head">
                            <div ><span className="pull-left subgroups-name">{subgroup.name_subgroup}</span></div>
                            <div className="pull-right grups-name">{subgroup.name_group}</div>
                        </div>
                        {/*<div className="item-type-car-futer">*/}
                            {/*<div className=" type-car-fuel">referred_id: {subgroup.referred_id}</div>*/}
                            {/*<div className="type-car-eng">: {}</div>*/}

                        {/*</div>*/}

                    </div>
               </div>
          )})
    }


    render() {
          console.log('this.props.marks.tabClassNameActive', this.props.marks_all.tabClassName);
        return (
          <div>
           <a className="nav-link custom-navigation-color d-flex custom-btn-content my-bt"  href="#" onClick={this.props.getMarks}>
                <div>
                    <i className="fas fa-car"></i>
                </div>
                <div className="px-1">Поиск</div>
            </a>

            <Modal isOpen={this.props.isShown} className={this.props.className}>
              <ModalHeader>Автомобиль</ModalHeader>
              <ModalBody>
                  <Nav tabs onClick={(event) => {this.props.TabActivator(event.target.id)}}>
                      <NavItem>
                          <NavLink id="nav-link-marks" href="#" active={"nav-link-marks" == this.props.marks_all.tabClassName ?  true : false}
                                   >Марка</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink id="nav-link-models" href="#" active={"nav-link-models" == this.props.marks_all.tabClassName ? true : false}
                                    >Модель</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink id="nav-link-types" href="#" active={"nav-link-types" == this.props.marks_all.tabClassName ? true : false}
                                   >Тип</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink id="nav-link-subgroups" href="#" active={"nav-link-subgroups" == this.props.marks_all.tabClassName ? true : false}
                                  >Группы</NavLink>
                      </NavItem>
                  </Nav>

                  {this.props.tabClassNameActive == 'nav-link-marks' ? this.showMarksList() : null}
                  {this.props.tabClassNameActive == 'nav-link-models' ? this.showModelListByMark() : null}
                  {this.props.tabClassNameActive == 'nav-link-types' ? this.showTypeListByMark() : null}
                  {this.props.tabClassNameActive == 'nav-link-subgroups' ? this.showSubgroupsByType() : null}


                  {/*{this.props.tabClassNameActive}*/}



              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.props.closeModal}>Закрыть</Button>
              </ModalFooter>
            </Modal>

          </div>
        );
    }
}


function mapStateToProps(state) {
    console.log('+++++++++++++++++CURREMT_STATATE', state)
    return {
        marks_all: state.marks_all,
        isUpdatedMarks: state.isUpdatedMarks,
        isShown: state.modalSearch.modals,
        selectMark: state.selectMark,
        tabClassNameActive: state.marks_all.tabClassName,
        modelsByMark: state.modelsByMark,
        typesByModel: state.typesByModel,
        subgroupsByType: state.subgroupsByType

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMarks: getMarks,
        closeModal: closeModal,
        TabActivator: TabActivator,
        getModelsByMark: getModelsByMark,
        getTypesByModel: getTypesByModel,
        getSubgroupsByType : getSubgroupsByType,
        getPartsBySubgroup : getPartsBySubgroup

    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalSearch);

