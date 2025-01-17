export interface ISteps {
    title: string
    result: string
    imageUrl?: string
}
export interface IQuestion {
    id: string
    question: string
    multipleChoice: string[]
    explanation?: string
    imageUrl?: string
    answer: string
    steps?: ISteps[]
}

export type TCreateQuestion = Omit<IQuestion, 'id'>
export type TPickQuestionId = Pick<IQuestion, 'id'>
export type TUpdateQuestion = Partial<IQuestion>