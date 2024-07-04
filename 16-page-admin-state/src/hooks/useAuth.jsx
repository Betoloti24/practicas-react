import useSession from "./useSession";

function useAuth() {
    const { session } = useSession();

    async function logoutUser() {
        try {
            const response = await fetch('http://127.0.0.1:8011/api-rest/logout/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                // console.log(errorData);
                throw new Error(errorData.message || 'Servicio Inhabilitado. Por favor inténtelo de nuevo más tarde.');
            }
    
            const data = await response.json();
            // console.log(data);
            return { success: true, data };
        } catch (error) {
            // console.log('Fetch error: ', error);
            return { success: false, error: error.message };
        }
    }

    async function loginUser(username, password) {
        const requestBody = {
            username: username,
            password: password
        };
    
        try {
            const response = await fetch('http://127.0.0.1:8011/api-rest/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                // console.log(errorData);
                throw new Error(errorData.message || 'Servicio Inhabilitado. Por favor inténtelo de nuevo más tarde.');
            }
    
            const data = await response.json();
            // console.log(data);
            return { success: true, data: data };
        } catch (error) {
            // console.log('Fetch error: ', error);
            return { success: false, error: error.message };
        }
    }

    return { loginUser };
}

export default useAuth;