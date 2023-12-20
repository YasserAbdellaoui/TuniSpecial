const isAutho = (allowedRoles) => {
    return (req, res, next) => {
        console.log('req.user:', req.user);
    if (req.user && allowedRoles.includes(req.user.userType)) {
    next(); 
    } else {
    res.status(403).json({ msg: "Access forbidden - Insufficient privileges"
    });
    }
    };
    };
    module.exports = isAutho;