interface ContactForm {
    subject: string;
    email: string;
    message: string;
}

class FormHandler {
    private form: HTMLFormElement;

    constructor(formId: string) {
        this.form = document.getElementById(formId) as HTMLFormElement;
        this.initialize();
    }

    private initialize(): void {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    private handleSubmit(event: Event): void {
        event.preventDefault();

        const formData: ContactForm = {
            subject: (this.form.querySelector('#subject') as HTMLInputElement).value,
            email: (this.form.querySelector('#email') as HTMLInputElement).value,
            message: (this.form.querySelector('#message') as HTMLTextAreaElement).value
        };

        if (this.validateForm(formData)) {
            console.log('Form data:', formData);
            this.sendEmail(formData);
        } else {
            alert('Please fill out all fields correctly.');
        }
    }

    private validateForm(data: ContactForm): boolean {
        return data.subject !== '' && data.email !== '' && data.message !== '';
    }

    private sendEmail(data: ContactForm): void {
        alert('Email sent!');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new FormHandler('contactForm');
});
