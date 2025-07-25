import jwt from 'jsonwebtoken'; 

export function authMiddleware(req, res, next){ 
    const token = req.headers.authorization?.split(" ")[1]; 

    if(!token) return res.status(403).send('Unauthorized');

    try { 
        const data = jwt.verify(token, process.env.JWT_SECRET); 
        req.user = data; 
        next(); 
    }
    catch(e){ 
        res.status(401).send(e); 
    }
}