const fetch = require("node-fetch");

exports.handler = async (event) => {
    const params = new URLSearchParams({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: event.queryStringParameters.code,
    });

    const response = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
    });

    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
};
