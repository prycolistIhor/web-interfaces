export const state = {
    currentPage: window.location.pathname,
    user: {
        isLoggedIn: false,
        email: ''
    },
    contactFormData: {
        name: '',
        message: ''
    }
};

export function setState(newState) {
    Object.assign(state, newState);
    window.dispatchEvent(new CustomEvent('stateChange'));
}
