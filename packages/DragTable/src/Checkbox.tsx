import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';

const Checkbox = forwardRef((props: any, ref) => {
  const { checked, onChange } = props;

  useImperativeHandle(ref, () => ({
    setIndeterminate: (val) => {
      setIndeterminate(val);
    },
  }));

  const inputRef = useRef<any>();
  const [indeterminate, setIndeterminate] = useState(false);

  useEffect(() => {
    inputRef.current.indeterminate = indeterminate;
    return () => {};
  }, [indeterminate]);

  useEffect(() => {
    if (checked) {
      setIndeterminate(!checked);
    }
    return () => {};
  }, [checked]);

  const _onChange = (ev) => {
    let checked = ev.target.checked;
    onChange && onChange(checked);
  };

  return (
    <label className={`shj-checkbox-wrap`}>
      <span
        className={`shj-checkbox ${checked ? 'shj-checkbox-checked' : ''} ${
          indeterminate ? 'shj-checkbox-indeterminate' : ''
        }`}
      >
        <input
          ref={inputRef}
          checked={checked}
          type="checkbox"
          className="shj-checkbox-input"
          onChange={_onChange}
        />
        <span className="shj-checkbox-inner"></span>
      </span>
      <span>{props.children}</span>
    </label>
  );
});

export default Checkbox;
