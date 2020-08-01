import { Request, Response, response } from 'express'
import axios from 'axios'

export default async function (req: Request, res: Response) {
    const ip = req.ip || req.connection.remoteAddress;
    const httpV = req.httpVersion;
    // const location = await axios.get('http://ip-api.com/json/'+ip);

    const data = {
        "ip_addr": ip,
        "protocol": req.protocol,
        "httpVersion": httpV,        
        "headers": req.headers,
        // "location": location
    };

    res.status(200).send(data);
}