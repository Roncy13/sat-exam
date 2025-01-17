import { IQuestion, TCreateQuestion, TPickQuestionId, TUpdateQuestion } from "./questions.interface";
import { GetConnection } from '@config/app-settings/database';
import { Question } from "./questions.model";
import { Repository } from "typeorm";

const questionRepository = GetConnection(Question) as Repository<IQuestion>;

export const createQuestionSrv = async (payload: TCreateQuestion) => {
    const newQuestion = new Question()

    newQuestion.answer = payload.answer
    newQuestion.explanation = payload.answer
    newQuestion.imageUrl = payload.imageUrl
    newQuestion.multipleChoice = payload.multipleChoice
    newQuestion.question = payload.question
    newQuestion.steps = payload.steps

    const result = await questionRepository.save(newQuestion)

    return result
}

export const getQuestionByIdSrv = async (payload: TPickQuestionId) => {
    const result = await questionRepository.findOne({ id: payload.id })

    return result
}

export const updateQuestionSrv = async ({ id, ...payload }: TUpdateQuestion) => {
    const question = await getQuestionByIdSrv({ id })
    const result = await questionRepository.save({
        id,
        ...question,
        ...payload,
    })

    return result
}

export const listQuestionSrv = async () => {
    const result = await questionRepository.find()

    return result
}

export const deleteQuestionSrv = async ({ id }: TPickQuestionId) => {
    const result = await questionRepository.delete({ id })

    return result
}