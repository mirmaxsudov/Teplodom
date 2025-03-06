import React, { useState } from "react";

const Login = ({ changeType }) => {
    const [formData, setFormData] = useState({
        emailOrPhone: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in user:", formData);
    };

    return (
        <div className="px-[40px] py-[40px] bg-white rounded-lg w-full max-w-md mx-auto">
            <h1 className="font-semibold text-[32px]">Войти</h1>

            <form onSubmit={handleSubmit} className="mt-[20px]">
                <label className="block text-gray-700 text-sm font-semibold">
                    Электронная почта или номер телефона
                </label>
                <input
                    type="text"
                    name="emailOrPhone"
                    value={formData.emailOrPhone}
                    onChange={handleChange}
                    placeholder="Введите email или телефон"
                    className="w-full p-3 border rounded-md mt-1"
                    required
                />

                <label className="block text-gray-700 text-sm font-semibold mt-4">
                    Пароль
                </label>
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Введите пароль"
                        className="w-full p-3 border rounded-md mt-1 pr-10"
                        required
                    />
                    <span
                        className="absolute right-3 top-4 cursor-pointer"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? "🙈" : "👁️"}
                    </span>
                </div>

                <p
                    className="text-[#2730D6] text-[14px] mt-2 cursor-pointer"
                    onClick={() => changeType("FORGOT_PASSWORD")}
                >
                    Забыли свой пароль ?
                </p>

                <button
                    type="submit"
                    className="w-full bg-[#FF9900] text-white font-semibold p-3 rounded-md mt-6"
                >
                    Войти
                </button>
            </form>
        </div>
    );
};

export default Login;