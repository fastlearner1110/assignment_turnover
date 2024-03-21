// src/components/VerifyOTP.js
import React, { useState } from "react";

const VerifyOTP = () => {
    const [otp, setOtp] = useState("");
    const [verificationStatus, setVerificationStatus] = useState(null);

    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    const handleVerify = (e) => {
        e.preventDefault();
        // Simulated OTP verification logic
        const simulatedOtp = "12345678"; // Simulated OTP sent to the user
        if (otp === simulatedOtp) {
            setVerificationStatus("success");
        } else {
            setVerificationStatus("failure");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleVerify}
            >
                <h2 className="text-2xl mb-4">Verify your email</h2>
                <p className="text-gray-700 mb-4">Enter the 8 digit code</p>
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="otp"
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Verify
                    </button>
                </div>
            </form>
            {verificationStatus && (
                <p
                    className={`text-center mt-4 ${
                        verificationStatus === "success"
                            ? "text-green-600"
                            : "text-red-600"
                    }`}
                >
                    {verificationStatus === "success"
                        ? "OTP verified successfully!"
                        : "Incorrect OTP. Please try again."}
                </p>
            )}
        </div>
    );
};

export default VerifyOTP;
