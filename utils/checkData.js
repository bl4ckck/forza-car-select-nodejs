const checkData = (getBody) =>
    new Promise((resolve, reject) => {
        Object.values(getBody).forEach((value) => {
            if (value === undefined) reject("One of request body is empty");
        });

        resolve(getBody);
    });

module.exports = checkData;