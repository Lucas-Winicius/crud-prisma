module.exports = class {
    static errors(obj) {
        const returnObj = {
            status: obj.status || 500,
            message: obj.message || 'Internal Server Error',
            data: obj.data || {}
        }

        return returnObj
    }
}