const isGitHubPages = window.location.hostname.includes('prycolistihor.github.io');
export const BASE_PATH = isGitHubPages ? '/web-interfaces' : '';

export const state = {
    currentPage: window.location.pathname.replace(BASE_PATH, '') || '/',
    user: { isLoggedIn: false, email: '' },
    contactFormData: { name: '', message: '' }
};

export function setState(newState) {
    Object.assign(state, newState);
    window.dispatchEvent(new CustomEvent('stateChange'));
}
