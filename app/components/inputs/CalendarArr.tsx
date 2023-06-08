'use client';

import {
  RangeKeyDict,
  DateRangePicker
} from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface DatePickerProps {
  value: any,
  onChange: (value: RangeKeyDict) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
}) => {
  return (
    <DateRangePicker
      onChange={item => onChange(item)}
      ranges={Object.values(value)}
    />
  );
}

export default DatePicker;
