import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse | undefined {
    let result
    const resquiredFields = ['name', 'email', 'password']
    resquiredFields.forEach(field => {
      if (!httpRequest.body[field]) {
        result = badRequest(new MissingParamError(field))
      }
    })
    return result
  }
}
