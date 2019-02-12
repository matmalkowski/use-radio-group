import { useState } from "react"

type Dictionary<T> = {[key: string]: T};
type Key = string | number;

const useRadioGroup = (initialSelection: Key): [Dictionary<boolean>, (newKey: Key) => void] => {
    const [checked, setItems] = useState<Dictionary<boolean>>({[initialSelection]: true});

    const setChecked = (newKey: Key):void => {
        setItems((prevChecked) => {
            const nextState = Object.keys(prevChecked)
                .reduce((acc: Dictionary<boolean>, k: string) => {
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
