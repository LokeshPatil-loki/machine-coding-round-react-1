import { useState } from 'react';
import Header from '../components/Header';
import OTPInput from '../components/OTPInput';
import classNames from 'classnames';

const VALID_OTP = '1234';

enum VALIDATION_STATES {
  REGULAR,
  ERROR,
  SUCCESS,
}

const OtpForm = () => {
  const [otp, setOTP] = useState(Array(4).fill(''));
  const [validationState, setValidationState] = useState(
    VALIDATION_STATES.REGULAR,
  );

  const handleVerify = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (otp.join('') === VALID_OTP) {
      setValidationState(VALIDATION_STATES.SUCCESS);
    } else {
      setValidationState(VALIDATION_STATES.ERROR);
    }
  };

  return (
    <div className="w-screen h-screen bg-[#3F72AF]">
      <Header className="text-white" />

      <div className="flex flex-col items-center justify-center w-[756px] gap-4 m-auto text-center bg-white rounded-xl font-dm-sans p-10">
        <h1 className="text-4xl font-bold">Mobile Phone Verification</h1>
        <div className="text-xl text-[#BFBFBF]">
          Enter the 4-digit verification code that was sent to your phone number
        </div>
        <form onSubmit={handleVerify} className="flex flex-col gap-5">
          <OTPInput
            className={classNames(
              `font-dm-sans bg-[#DBE2EF] box-content inline-block text-center py-4 text-5xl rounded-xl border-2 outline-none`,
              {
                'border-error': validationState === VALIDATION_STATES.ERROR,
                'border-success': validationState === VALIDATION_STATES.SUCCESS,
              },
            )}
            otp={otp}
            setOTP={setOTP}
          />
          <button
            className={classNames(
              `bg-[#112D4E] text-white w-full rounded-xl p-5 text-2xl`,
              {
                'bg-error': validationState === VALIDATION_STATES.ERROR,
                'bg-success': validationState === VALIDATION_STATES.SUCCESS,
              },
            )}
          >
            Verify Account
          </button>
        </form>
        <div className="text-xl text-[#BFBFBF]">
          Didn't receive code? <span className="text-[#112D4E]">Resend</span>
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
