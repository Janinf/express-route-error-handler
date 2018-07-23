/**
 * Executes a action function and catches any errors occurring and passing them to an error handle function
 * @param {function(Error)} errorHandler Callback handling any error occurring while executing action
 * @param {function(): *} action Function to execute and watch for errors
 * @param {*} Parameters to pass to action
 * @returns {Promise<*>} Promise resolving with whatever action returns
 */
module.exports = async (errorHandler, action, parameters = {}) => {
    try {
        return await action(parameters);
    } catch (e) {
        await errorHandler(e);
    }
};
