export const EmailedClass = class {
    async sendEmail(email) {
        try {
            this.res = await fetch(`https://skyscanner-server-mailing.herokuapp.com/${email}`, {
                method: 'GET',
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
