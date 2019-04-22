function spiderLinks(currentUrl, body, nesting, callback) {
    if(nesting === 0) {
        return ProcessingInstruction.nextTick(callback);
    }

    const links = ['1', '2'] //utils.getPageLinks
    function iterate(index) {
        if(index === links.length) {
            return callback()
        }

        spiderLinks(links[index], nesting - 1, err => {
            if(err) {
                return callback(err);
            }

            iterate(index + 1);
        });
    }
    iterate(0);
}

function main() {
    console.log('web-spider-v2');
}

module.exports = main;
