

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';



export const TAB_ACTIVATOR = 'TAB_ACTIVATOR';



export function openModal() {
    return {type: OPEN_MODAL, payload: true};
}
export function closeModal() {
    return {type: CLOSE_MODAL, payload: false};
}


export function TabActivator(tabClassName) {
    return {type: TAB_ACTIVATOR, payload: tabClassName};
}