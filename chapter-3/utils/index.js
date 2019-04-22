const urlParse = require('url').parse; // returns an expanded data by parsing the provided URL
const urlResolve = require('url').resolve;
const cheerio = require('cheerio');

module.exports.urlToFilename = function urlToFilename(url) {
    const parsedUrl = urlParse(url);
    const urlPath = parsedUrl.path.split('/')
        .filter(component => !!component)
}

module.exports.getLinkUrl = function getLinkUrl(currentUrl, element) {
    const link = urlResolve(currentUrl, element.attribs.href || "");
    const parsedLink = urlParse(link);
    const currentParsedUrl = urlParse(currentUrl);
    if (parsedLink.hostname !== currentParsedUrl.hostname || !parsedLink.pathname) {
        return null;
    }

    return link;
}

module.exports.getPageLinks = function getPageLinks(currentUrl, body) {
    return [].slice.call(cheerio.load(body)('a'))
        .map(item => getLinkUrl(currentUrl, item))
        .filter(item => !!item);
}