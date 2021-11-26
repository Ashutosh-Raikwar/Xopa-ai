const Uri = require("uri-js");

// console.log(link);

function constructURL(width, height, locale, interval, status, rtype = "") {
    let domain = Uri.serialize({
        scheme: "http",
        host: "s.x.ai",
    })
    let frags = `?height=${height}&interval=${interval}&status=${status}&width=${width}&locale${locale}`;
    console.log(domain.concat(frags));
}

constructURL(300, 300, "en", "3h", "Active")