import { useState } from "react"

const useRadioGroup = (initialSelection: string | number): [{[key: string]: boolean}, (newKey: string | number) => void] => {
    const [checked, setItems] = useState<{[key: string]: boolean}>({[initialSelection]: true});

    const setChecked = (newKey: string | number):void => {
        setItems((prevChecked) => {
            const nextState = Object.keys(prevChecked)
                .reduce((acc: { [key: string]: boolean}, k: string) => {
                    acc[k] = false;
                    return acc;
                }, {})
            nextState[newKey] = true
            return nextState;
        });
    }

    return [checked, setChecked];
}

export default useRadioGroup;
