import { Request, Response } from "express";
import { getQuestionByIdSrv } from "./questions.services";
import { getQuestionTransformer } from "./questions.transformer";
import PolicyError from "@core/policy.error";

/**
 * Example Policy Controller for Smurf
 */
export const QuestionsCheckByIdPolicy = async(req: Request, res: Response, next: any) => {
  const payload = getQuestionTransformer(req)
  const question = await getQuestionByIdSrv(payload)

  if (!question) {
    throw new PolicyError({
      name: 'Question does not exist'
    })
  }

  res.locals = {
    ...res.locals,
    question,
  }

  next();
}