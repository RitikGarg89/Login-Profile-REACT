
import React, { useEffect, useState } from "react";
import { clearCurrentUser, getCurrentUser, removeUser } from "../Utils/UserStorage";
import { useNavigate } from "react-router-dom";

function Profile() {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const savedUser = getCurrentUser();
        setUser(savedUser);
    }, []);

    if (!user) {
        return <p>No user found. Please register first.</p>;
    }

    return (
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
            <h1 className="mb-6 text-2xl font-bold">My Profile</h1>

            <div className="space-y-4">
                <div>
                    <p className="text-sm text-gray-500">Username</p>
                    <p className="font-medium">{user.username}</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{user.email}</p>
                </div>
            </div>

            <button onClick={() => {
                removeUser()
                navigate("/signIn")
            }} className="mt-6 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
                Delete Account
            </button>
            <button onClick={() => {
                clearCurrentUser();
                navigate("/");
            }} type="button" className="mt-6 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
                Log Out
            </button>
        </div>
    );
}

export default Profile;
