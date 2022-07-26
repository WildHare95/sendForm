export function debounce(wait: number) {
    let timeout: any
    return function(fn: any) {
        const later = () => {
            clearTimeout(timeout)
            fn()
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}