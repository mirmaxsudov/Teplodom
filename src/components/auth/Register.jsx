import React, { useState } from "react";

const Register = ({ changeType }) => {
    const [formData, setFormData] = useState({
        name: "",
        emailOrPhone: "",
        password: "",
        confirmPassword: "",
        agreed: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () =>
        setShowConfirmPassword(!showConfirmPassword);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Пароли не совпадают!");
            return;
        }
        console.log("Registering user:", formData);
    };

    return (
        <div className="px-[40px] py-[40px] bg-white rounded-lg w-full max-w-md mx-auto">
            <h1 className="font-semibold text-[32px]">Регистрация</h1>
            <p className="flex items-center mt-[20px] gap-2 text-[15px]">
                Иметь аккаунт?
                <span
                    className="text-[#2730D6] cursor-pointer"
                    onClick={() => changeType("LOGIN")}
                >
                    Войти
                </span>
            </p>

            <form onSubmit={handleSubmit} className="mt-[20px]">
                <label className="block text-gray-700 text-sm font-semibold">
                    Ваше имя
                </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введите ваше имя"
                    className="w-full p-3 border rounded-md mt-1"
                    required
                />

                <label className="block text-gray-700 text-sm font-semibold mt-4">
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

                <label className="block text-gray-700 text-sm font-semibold mt-4">
                    Подтвердить пароль
                </label>
                <div className="relative">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Повторите пароль"
                        className="w-full p-3 border rounded-md mt-1 pr-10"
                        required
                    />
                    <span
                        className="absolute right-3 top-4 cursor-pointer"
                        onClick={toggleConfirmPasswordVisibility}
                    >
                        {showConfirmPassword ? "🙈" : "👁️"}
                    </span>
                </div>

                {/* Agreement Checkbox */}
                <div className="flex items-center mt-4">
                    <input
                        type="checkbox"
                        name="agreed"
                        checked={formData.agreed}
                        onChange={handleChange}
                        className="mr-2"
                        required
                    />
                    <label className="text-gray-700 text-sm">
                        Я согласен с{" "}
                        <span className="text-[#2730D6] cursor-pointer">
                            Условиями и Политикой конфиденциальности
                        </span>
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#FF9900] text-white font-semibold p-3 rounded-md mt-6"
                >
                    Регистрация
                </button>
            </form>
        </div>
    );
};

export default Register;
