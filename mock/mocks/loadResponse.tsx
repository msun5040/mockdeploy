
export function successResponse() {
    return '{"data":{"headers":["one","two","three","four","five"],"body":[["1","2","3","4","5"],["10","20","30","40","50"],["100","200","300","400","500"]]},"type":"success"}'
}

/**
 * TODO: when implementing this for REPL, make sure that the file_path field is named 'data'
 * @returns 
 */
export function errorBadRequest() {
    return '{"error_message":"/Users/sean/cs32/server-syu0916-huang-tiffany/data/SimpleCsv/head.csv (No such file or directory)",'+
    '"error_bad_request":"invalid arguments","type":"error"}'
}