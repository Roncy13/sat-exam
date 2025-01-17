import { Request } from "express"
import { TCreateQuestion, TPickQuestionId, TUpdateQuestion } from "./questions.interface"
import PolicyError from "@core/policy.error"

export const createQuestionTransformer = ({ body }: Request) => {
    return {
        question: body.question,
        imageUrl: body.imageUrl || undefined,
        multipleChoice: body.multipleChoice,
        answer: body.answer,
        explanation: body.explanation || undefined,
        steps: body.steps || undefined,
    } as TCreateQuestion
}

export const getQuestionTransformer = ({ params }: Request) => {
    return {
        id: params.id
    } as TPickQuestionId
}

export const updateQuestionTransformer = ({ body, params }: Request) => {
    const question: TUpdateQuestion = {
        id: params.id as string
    }

    if (body.question) {
        question.question = body.question
    }

    if (body.imageUrl) {
        question.imageUrl = body.imageUrl
    }

    if (body.multipleChoice) {
        question.multipleChoice = body.multipleChoice
    }

    if (body.answer) {
        question.answer = body.answer
    }

    if (body.explanation) {
        question.explanation = body.explanation
    }

    if (body.steps) {
        question.steps = body.steps
    }

    if (Object.keys(question).length <= 1) {
        throw new PolicyError({ name: 'No params to update' })
    }

    return question
}