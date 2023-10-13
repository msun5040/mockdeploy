// const obj : JSON = '{"data":{"headers":["one","two","three","four","five"],"body":[["1","2","3","4","5"],["10","20","30","40","50"],["100","200","300","400","500"]]},"type":"success"}'
// const dataMap = new Map<string, JSON>(["yes", obj])

export function successResponse() {
    return '{"data":{"headers":["one","two","three","four","five"],"body":[["1","2","3","4","5"],["10","20","30","40","50"],["100","200","300","400","500"]]},"type":"success"}'
}

export function successResponseZoo() {
    return '{"data":{"headers":["ID","Zoo Location","Name","Animal","Food"],"body":[["01", "Bronx Zoo", "Jeremy", "tiger", "steak"],["02", "San Francisco Zoo", "Sean", "tiger", "steak"],["03", "San Francisco Zoo", "John", "human", "tiger"],["04", "Maryland Zoo", "Lawn", "penguin", "krill"],["05", "Baltimore Zoo", "Prawn", "penguin", "krill"],["06", "New York Zoo", "Drawn", "penguin", "sardines"]]},"type":"success"}'
}

/**
 * TODO: when implementing this for REPL, make sure that the file_path field is named 'data'
 * @returns 
 */
export function errorBadRequest() {
    return '{"error_message":"data/SimpleCsv/head.csv (No such file or directory)",'+
    '"error_bad_request":"invalid arguments","type":"error"}'
}

/**
 * a headless parsed object
 */
export function headlessRequest() {
    return '{"data":{"headers":["0","1","2","3","4"],"body":[["10","20","30","40","50"],'+
    '["100","200","300","400","500"]]},"type":"success"}'
}