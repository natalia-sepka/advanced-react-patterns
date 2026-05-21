export async function withAsync(fn) {
    try {
        if(typeof fn !== "function") {
            throw new Error("The arg. must be of type function.")
        }

        const { data } = await fn();
        return {
            response: data,
            error: null
        }
    } catch (err) {
        return{
            err,
            response: null
        }
    }
}