class HTTP {
    async get(url) {
        try {
            let response = await fetch(url);
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }

    async post(url, body) {
        try {
            let response = await fetch(url, { method: 'POST', headers: this.header(), body: JSON.stringify(body) });
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }

    header() {
        return {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }
}

export default HTTP;
