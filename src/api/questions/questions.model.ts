/**
 * This File is for your model use
 */
import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm"
import { ISteps } from "./questions.interface";

@Entity()
export class Question extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'text',
        nullable: false
    })
    question: string

    @Column({
        type: 'text',
        nullable: true
    })
    explanation: string

    @Column({
        array: true,
        type: 'text',
        nullable: false
    })
    multipleChoice: string[]

    @Column({
        type: 'text',
        nullable: true
    })
    imageUrl: string

    @Column({
        type: 'text',
        nullable: false
    })
    answer: string

    @Column({
        array: true,
        type: 'simple-json',
        nullable: false,
    })
    steps: ISteps[]
}