import { z } from 'zod'
import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'

export const User = z.object({
  name: z
    .string({
      required_error: 'Nome é obrigatório',
    })
    .nonempty(),
  email: z
    .string({
      required_error: 'E-Mail é obrigatório',
    })
    .email('Insira um email válido')
    .nonempty(),
})

export const validate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await User.parseAsync(req.body)

    req.body.name = req.body.name.replace(',', ' ')
    req.body.email = req.body.email.replace(',', ' ')

    next()
  } catch (error) {
    return res.status(StatusCodes.NOT_ACCEPTABLE).send({
      error,
    })
  }
}
