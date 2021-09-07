import { useState } from "react"

const useInput = (initialValue) => {
    const [ value, setValue ] = useState(initialValue)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const clear = () => {
        setValue('')
    }

    return { value, onChange, clear }
}

export default  useInput