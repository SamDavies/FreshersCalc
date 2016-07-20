module.exports = {
    login(email, pass, cb) {
        cb = arguments[arguments.length - 1];
        if (localStorage.token) {
            if (cb) cb(true);
            this.onChange(true);
            return
        }

        var credentials = {
            email: email,
            password: pass
        };

        var promise = $.ajax({
            type: "POST",
            url: "/api-token-auth/",
            // The key needs to match your method's input parameter (case-sensitive).
            data: JSON.stringify(credentials),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        });

        promise.done((data, status, request) => {
            localStorage.token = data.token;
            if (cb) cb(true);
            this.onChange(true)
        });

        promise.always((data, status, error) => {
        });
    },

    getToken() {
        return localStorage.token
    },

    logout(cb) {
        delete localStorage.token;
        delete localStorage.isCompany;
        if (cb) cb();
        this.onChange(false)
    },

    loggedIn() {
        return !!localStorage.token
    },

    onChange() {
    },

    getIsCompany() {
        return localStorage.isCompany;
    },

    setIsCompany(isCompany) {
        localStorage.isCompany = isCompany;
    },

    ajax(options) {
        var self = this;
        return $.ajax({
            type: options.type,
            url: options.url,
            data: options.data,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "JWT " + self.getToken());
            },
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        });
    }
};