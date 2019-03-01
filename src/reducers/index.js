import { combineReducers } from 'redux'

import ActiveCar from './car-active'
import MarksUpdateStoreFromReduser from './marks'
import ModelsUpdateStoreFromReduser from './models'
import modalSearch from './modalSearch'
import ModelsByMark from './models-by-mark'
import TypesUpdateStoreFromReduser from './types'
import TypesByModel from './types-by-model'
import SubgroupsUpdateStoreFromReduser from './subgroups'
import SubgroupsByType from './subgoups-by-type'
import PartsUpdateStoreFromReduser from './parts'
import PartsBySubgroup from './parts-by-subgroup'
import PartsInCard from './card'
import isShownPayment from './paymetn'
import sendEmail from './send-email'
import PopUp from './popup'


const rootReducer = combineReducers({
    models_all: ModelsUpdateStoreFromReduser,
    marks_all: MarksUpdateStoreFromReduser,
    active: ActiveCar,
    modalSearch : modalSearch,
    modelsByMark : ModelsByMark,
    types_all : TypesUpdateStoreFromReduser,
    typesByModel: TypesByModel,
    subgroups_all: SubgroupsUpdateStoreFromReduser,
    subgroupsByType: SubgroupsByType,
    parts_all: PartsUpdateStoreFromReduser,
    partsBySubgroup: PartsBySubgroup,
    partsInCard: PartsInCard,
    isShownPayment: isShownPayment,
    sendEmail: sendEmail,
    popUp: PopUp



});

export default rootReducer