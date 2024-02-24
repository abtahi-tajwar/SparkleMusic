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

export function formatTimeFromMillisecond(milliseconds : number) {
    // Convert milliseconds to seconds
    var totalSeconds = Math.floor(milliseconds / 1000);
    
    // Calculate hours, minutes, and seconds
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;
    
    // Format hours, minutes, and seconds
    var formattedTime = '';
    if (hours > 0) {
        formattedTime += hours + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    } else {
        formattedTime += minutes + ':' + seconds.toString().padStart(2, '0');
    }
    
    return formattedTime;
}

export function renderExceprt (str : string, length : number) {
    return (str.length > length) ? str.substring(0, length)+"..." : str
}