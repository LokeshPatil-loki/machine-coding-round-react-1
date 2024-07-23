import classNames from 'classnames';
import React from 'react';

const OTP_MAX_LENGTH = 4;

function getOtpInputBoxID(index: number) {
  return `otp-box-${index}`;
}

function getNextOtpInputBoxId(index: number) {
  console.log(index);
  if (index === OTP_MAX_LENGTH - 1) {
    return '';
  }
  return getOtpInputBoxID(index + 1);
}

function getPreviousOtpInputBoxId(index: number) {
  if (index >= OTP_MAX_LENGTH || index <= 0) {
    return '';
  }
  return getOtpInputBoxID(index - 1);
}

interface OTPInputProps {
  className?: string;
  otp: string[];
  setOTP: (value: string[] | ((prev: string[]) => string[])) => void;
}

const OTPInput = ({ otp, setOTP, className = '' }: OTPInputProps) => {
  const classes = classNames('border border-black-1', className);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    let { value } = e.target;
    value = value.charAt(value.length - 1);

    if (/^[0-9]$/.test(value)) {
      setOTP((prev) => {
        let newOtp = [...prev];
        newOtp[index] = value;
        return newOtp;
      });
      let inputID = getNextOtpInputBoxId(index);
      if (inputID) {
        document.getElementById(inputID)?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    const key = e.key;
    if (key === 'Backspace') {
      setOTP((prev) => {
        let newOtp = [...prev];
        newOtp[index] = '';
        return newOtp;
      });
      const inputID = getPreviousOtpInputBoxId(index);
      if (inputID) {
        document.getElementById(inputID)?.focus();
      }
    }
  };

  const renderedInput = otp.map((value, index) => (
    <input
      id={getOtpInputBoxID(index)}
      className={classes}
      value={value}
      onChange={(e) => handleChange(e, index)}
      onKeyDown={(e) => handleKeyDown(e, index)}
      size={1}
    />
  ));
  return (
    <div className="flex items-center justify-between gap-3 max-w-max">
      {renderedInput}
    </div>
  );
};

export default OTPInput;
