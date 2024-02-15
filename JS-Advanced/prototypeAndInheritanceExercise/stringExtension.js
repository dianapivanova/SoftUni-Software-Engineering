(function () {
    String.prototype.ensureStart = function (str) {
        // if (this.slice(0, str.length) === str) {
        if (this.startsWith(str)) {
            return this.toString();
        }
        return `${str}${this}`;
    };

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        }
        return `${this}${str}`;
    };

    String.prototype.isEmpty = function () {
        return this.toString() === '';
    };

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }

        if (this.includes(' ')) {
            let lastSpaceIndex = this.length;
            do {
                lastSpaceIndex = this.lastIndexOf(' ', lastSpaceIndex - 1);
            } while (lastSpaceIndex !== -1 && lastSpaceIndex + 3 > n)
            return `${this.slice(0, lastSpaceIndex)}...`;
        }

        if (n > 3) {
            let string = `${this.slice(0, n - 3)}...`;
            return string;
        }
        return '.'.repeat(n);
    };

    String.format = function (string, ...params) {
        let replaceRegex = /{(\d+)}/g;
        let replaced = string.replace(replaceRegex, (match, group1) => {
            let index = Number(group1);
            if (params[index] !== undefined) {
                return params[index];
            }

            return match;
        });

        return replaced;
    };
}())