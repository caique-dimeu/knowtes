import { useNavigate } from "react-router-dom";

interface UseLogoutCallback {
    logout: () => void;
}

export default function useLogout(): UseLogoutCallback {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return { logout };
}