import { Request, Response } from 'express';

export default function handleSuccess(res: Response, data: any) {
  res
    .send({
      status: true,
      data,
    })
    .end();
}
