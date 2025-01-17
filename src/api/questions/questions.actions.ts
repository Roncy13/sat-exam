import SmurfResponse, { SmurfAction } from "@core/response";
import { HTTP_METHODS } from "@utilities/constants";
import { QuestionCreateSchema, QuestionUpdateSchema } from "./questions.validators";
import { Request } from "express";
import { createQuestionTransformer, getQuestionTransformer, updateQuestionTransformer } from "./questions.transformer";
import { createQuestionSrv, deleteQuestionSrv, getQuestionByIdSrv, listQuestionSrv, updateQuestionSrv } from "./questions.services";
import { QuestionsCheckByIdPolicy } from "./questions.policy";

@SmurfAction({
  action: '/question/:id',
  message: 'Questions fetched successfully',
})
export class QuestionGetApi extends SmurfResponse {

  async run(req: Request) {
    const payload = getQuestionTransformer(req)

    this.result = await getQuestionByIdSrv(payload)
  }
}

@SmurfAction({
  action: '/question',
  message: 'Question created successfully',
  method: HTTP_METHODS.POST,
  validation: QuestionCreateSchema
})
export class QuestionCreateApi extends SmurfResponse {

  async run(req: Request) {
    const payload = createQuestionTransformer(req)

    this.result = await createQuestionSrv(payload)
  }
}

@SmurfAction({
  action: '/question/:id',
  message: 'Question updated successfully',
  method: HTTP_METHODS.PUT,
  policies: [QuestionsCheckByIdPolicy],
  validation: QuestionUpdateSchema
})
export class QuestionUpdateApi extends SmurfResponse {

  async run(req: Request) {
    console.log(req.params, ' params')
    const payload = updateQuestionTransformer(req)

    this.result = await updateQuestionSrv(payload)
  }
}

@SmurfAction({
  action: '/questions/json',
  message: 'Questions fetched successfully',
})
export class QuestionsApi extends SmurfResponse {

  async run() {
    this.result = await listQuestionSrv()
  }
}

@SmurfAction({
  action: '/question/:id',
  message: 'Question deleted successfully',
  method: HTTP_METHODS.DELETE,
  policies: [QuestionsCheckByIdPolicy],
})
export class QuestionDeleteApi extends SmurfResponse {

  async run(req: Request) {
    const payload = getQuestionTransformer(req)

    this.result = await deleteQuestionSrv(payload)
  }
}