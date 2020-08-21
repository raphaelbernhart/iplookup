import { Request, Response, response } from 'express'
import axios from 'axios'

export default async function (req: Request, res: Response) {
    const ip = req.ip || req.connection.remoteAddress;
    const httpV = req.httpVersion;

    const data = {
        ip_addr: ip,
        protocol: req.protocol,
        httpVersion: httpV,        
        headers: {
            connection: req.headers.connection,
            "cache-control": req.headers["cache-control"],
            "user-agent": req.headers["user-agent"],

        },
        path: req.path,
        subdomains: req.subdomains,
    };

    res.status(200).json(data);
}