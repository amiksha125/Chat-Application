//to handle user exists, passwors mismatched errors in a proper way
export const errorHandler = (statusCode, message) => {
    const error = new Error()
    error.statusCode = statusCode
    error.message = message
    return error
}