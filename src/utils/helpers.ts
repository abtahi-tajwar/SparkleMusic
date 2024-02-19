export function formatTimeFromSecond (second : number) {
    var result = ""
    
    const hours = Math.floor(second / 3600);
    const minutes = Math.floor((second - hours * 3600) / 60);
    const seconds = Math.floor((second - minutes * 60) % 60);
    
    if (hours) {
        result += hours.toString().padStart(2, '0')
    }
    result += hours ? `:${minutes.toString().padStart(2, '0')}:` : `${minutes.toString().padStart(2, '0')}:`
    result += seconds.toString().padStart(2, '0')
    
    
    return result
}