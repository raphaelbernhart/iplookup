import { Request, Response, response } from 'express'
import axios from 'axios'

export default async function (req: Request, res: Response) {
    const ip = req.ip || req.connection.remoteAddress;
    const httpV = req.httpVersion;

    const data = {
        ip_addr: ip,
        protocol: req.protocol,
        httpVersion: httpV,        
        headers: {},
        path: req.path,
        subdomains: req.subdomains,
    };

    Object.assign(data.headers, req.headers);

    res.status(200).json(data);
}