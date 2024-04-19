import { Response } from 'express';

export default function handleError(res: Response, err: Error) {
  let message = '';

  if (err.message === '') {
    message = '欄位沒有正確，或沒有此 ID';
  } else {
    message = err.message;
  }

  res
    .status(400)
    .send({
      status: true,
      message,
    })
    .end();
}
