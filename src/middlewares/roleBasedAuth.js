
const roleBasedAuth=(role)=>{
    return(req,res,next)=>{
        if(req.user.roles.includes(role)) return next();
        res.status(403).send("access denied");
    };
};
export default roleBasedAuth;




// this is the correct way to write the code it doesnot crash in any condition 
// const roleBaseAcc = (role) => {
//     const verifyRole = (req, res, next) => {
//         if (!req.user || !req.user.roles) {
//             return res.status(401).send("Unauthorized");
//         }
//         if (req.user.roles.includes(role)) {
//             return next();
//         }
//         return res.status(403).send("Access denied");
//     };
//     return verifyRole;
// };
// export default roleBaseAcc;
