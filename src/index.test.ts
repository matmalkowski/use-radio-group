import 'jest';
import {testHook, act, cleanup} from 'react-testing-library'
import useRadioGroup from './index';

describe('useRadioGroup', () => {
    afterEach(cleanup);

    it('should start with correct defaults in state', () => {
        let checked, setChecked;
        testHook(() => ([checked, setChecked] = useRadioGroup(1)))
    
        expect(checked[1]).toBe(true)
        expect(checked[0]).toBeFalsy();
    })

    it('should set new index to true when setChecked is called', () => {
        let checked, setChecked;
        testHook(() => ([checked, setChecked] = useRadioGroup(1)))
    
        expect(checked[1]).toBe(true);
        expect(checked[0]).toBeFalsy();

        act(() => {
            setChecked(0);
        });

        expect(checked[1]).toBeFalsy();
        expect(checked[0]).toBe(true);
    });

    it('should work with string keys', () => {
        let checked, setChecked;
        testHook(() => ([checked, setChecked] = useRadioGroup('key1')))
    
        expect(checked['key1']).toBe(true);
        expect(checked['key2']).toBeFalsy();

        act(() => {
            setChecked('key2');
        });

        expect(checked['key1']).toBeFalsy();
        expect(checked['key2']).toBe(true);
    });

    it('should work with multiple elements in state', () => {
        let checked, setChecked;
        testHook(() => ([checked, setChecked] = useRadioGroup(0)))
    
        expect(checked[0]).toBe(true);
        expect(checked[1]).toBeFalsy();
        expect(checked[2]).toBeFalsy();
        expect(checked[3]).toBeFalsy();
        expect(checked[4]).toBeFalsy();

        act(() => {
            setChecked(2);
        });

        expect(checked[0]).toBeFalsy();
        expect(checked[1]).toBeFalsy();
        expect(checked[2]).toBe(true);
        expect(checked[3]).toBeFalsy();
        expect(checked[4]).toBeFalsy();

        act(() => {
            setChecked(4);
        });

        expect(checked[0]).toBeFalsy();
        expect(checked[1]).toBeFalsy();
        expect(checked[2]).toBeFalsy();
        expect(checked[3]).toBeFalsy();
        expect(checked[4]).toBe(true);
    });

    it('should not change the state if setChecked is called on key thats already set to true', () => {
        let checked, setChecked;
        testHook(() => ([checked, setChecked] = useRadioGroup(1)))
    
        expect(checked[1]).toBe(true);
        expect(checked[0]).toBeFalsy();

        act(() => {
            setChecked(1);
        });

        expect(checked[1]).toBe(true);
        expect(checked[0]).toBeFalsy();
    });
    
});
