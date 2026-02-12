
import jwtToken from "../utils/jwt.js";

const auth = async (req, res, next) => {
    const cookieHeader = await req.headers.cookie;
    if (!cookieHeader) {
        return res.status(401).send("you need authentication");
    }
    /*
    // OLD (commented): fragile parsing and undefined variable usage
    // const authToken = cookie.split("=")[1]; // 'cookie' was undefined here and fails with multiple cookies
    */

    // Parse cookies safely: "key=value; key2=value2"
    const cookies = cookieHeader.split("; ").reduce((acc, kv) => {
        const [k, v] = kv.split("=");
        if (k && v) acc[k] = v;
        return acc;
    }, {});

    const authToken = cookies["authToken"] || cookies["authtoken"];
    if (!authToken) {
        return res.status(401).send("auth token cookie not found");
    }

    try {
        const decoded = await jwtToken.verifyToken(authToken);
        const payload = typeof decoded === "string" ? JSON.parse(decoded) : decoded;
        req.user = payload;
        if (!req.user || (!req.user._id && !req.user.id && !req.user.userId)) {
            return res.status(401).send("invalid auth payload");
        }
        next();
    } catch (error) {
        res.status(401).send("unauthorized user");
    }
};

export default auth;

