import React from 'react'
import { useState } from 'react'
function useCustom() {
    const [Value,setValue] = useState("Hello this is custom")
    return Value 
}

export default useCustom