const getCWD = process.cwd;
const getArgs = () => process.argv;

const DEV_URL_REGEX = /devURL=(\w+)/g;

const getDEVURL = () => {
    const args = getArgs();
    if(args.length > 2){
        const devURLArg = args[2];
        const matches = new RegExp(DEV_URL_REGEX).exec(devURLArg);
        if(matches){
            const [, devURL] = devURLArg.split('devURL=');
            return devURL;
        }
    }
    return '';
}

module.exports = {
    getCWD,
    getDEVURL
}