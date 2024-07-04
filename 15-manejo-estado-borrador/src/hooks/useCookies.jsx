
function useCookies() {

    function setCookie(key, value) {
        const listcookies = document.cookie.split('; ');
        listcookies = listcookies.map((vcookie) => {
            const [lkey, lvalue] = vcookie.split('=');
            return lkey === key ? `${key}=${value}` : vcookie;
        });
        document.cookie = listcookies.join('; ');
    }
    
    function getCookie(cookie) {
        const cookieArray = document.cookie.split('; ');
        const cookieObject = cookieArray.filter((vcookie) => {
            const [key, value] = vcookie.split('=');
            return key === cookie;
        });
        return cookieObject.length > 0 ? cookieObject[0].split('=')[1] : null;
    }

    function verifiAuthenticatedInCookie(cookie) {
        const result = getCookie(cookie);
        return result;
    }

    return { getCookie, verifiAuthenticatedInCookie, setCookie };
}

export default useCookies;