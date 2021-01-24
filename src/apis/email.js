export const EmailedClass = class {
    async sendEmail(email) {
        try {
            this.res = await fetch(`https://skyscanner-server.herokuapp.com/confirmBooking/${email}`, {
                method: 'POST',
                headers: {
                    'User-Agent': 'PostmanRuntime/7.26.8',
                },
            });
            this.data = await this.res.json();
        } catch (error) {
            console.log(error);
        }
    }
};
