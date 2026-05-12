import { state, setState } from "../state.js";

export const ContactForm = () => `
    <form id="contactForm" style="display: flex; flex-direction: column; gap: 10px; max-width: 400px;">
        <div class="form-group">
            <label for="contactName">Name:</label>
            <input type="text" id="contactName" value="${state.contactFormData.name || ''}" required>
        </div>
        <div class="form-group">
            <label for="contactMsg">Message:</label>
            <textarea id="contactMsg" rows="4">${state.contactFormData.message || ''}</textarea>
        </div>
        <button type="submit" class="auth-btn">Send Message</button>
    </form>
`;
