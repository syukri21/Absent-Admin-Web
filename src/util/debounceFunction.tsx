import debounce from "debounce"

const debounceFunction = (time = 0) => debounce((fn: any) => fn(), time)

export default debounceFunction
