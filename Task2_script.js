
function extract (text) {
    if (typeof text === 'string') {
        const slice = text.slice(-3);
        console.log(slice) 
    }
}
extract('Hello world');