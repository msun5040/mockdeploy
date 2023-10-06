'{"header_flag":true,"file_path":"/Users/sean/Documents/cs32/server-syu0916-huang-tiffany/data/SimpleCsv/head.csv","success_message":"file at /Users/sean/Documents/cs32/server-syu0916-huang-tiffany/data/SimpleCsv/head.csv successfully loaded","response_type":"success"}'

export function successResponse() {
    return '{"header_flag":true,"data":"data/SimpleCsv/head.csv","success_message":"file at /Users/sean/Documents/cs32/server-syu0916-huang-tiffany/data/SimpleCsv/head.csv successfully loaded","type":"success"}'
}

/**
 * TODO: when implementing this for REPL, make sure that the file_path field is named 'data'
 * @returns 
 */
export function errorBadRequest() {
    return '{"error_message":"/Users/sean/cs32/server-syu0916-huang-tiffany/data/SimpleCsv/head.csv (No such file or directory)","error_bad_request":"invalid arguments","response_type":"error"}'
}