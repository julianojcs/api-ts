import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse | undefined {
    let result
    const resquiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    resquiredFields.forEach(field => {
      if (!httpRequest.body[field]) {
        result = badRequest(new MissingParamError(field))
      }
    })
    return result
  }
}
