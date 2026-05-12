import { state } from "../state.js";
import { ContactForm } from "../components/ContactForm.js";

export const ContactPage = () => `
    <div class="about-container" style="padding: 20px;">
        <h1>Contact Us</h1>
        ${ContactForm()}
    </div>
`;
