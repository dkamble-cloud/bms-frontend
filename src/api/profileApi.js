export const getProfile = async () => {

    const token = localStorage.getItem("token");

    const response = await fetch(
        "http://localhost:8080/api/users/profile",
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        }
    );

    return response;
};
