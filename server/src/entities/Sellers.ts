import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { Invoice } from "./Invoices"
import { Rating } from "./Ratings"

@Entity({ name: "sellers" })
export class Seller {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    address: string

    @Column()
    district: string
    
    @Column()
    email: string
    
    @Column()
    phone: string
    
    @Column({ nullable: true })
    image: string

    @Column({ default: 0 })
    balance: string
    
    @Column({ default: false })
    isPijetUrut: boolean

    @Column({ default: false })
    isPijetRefleksi: boolean

    @Column({ default: false })
    isPijetRelaksasi: boolean

    @Column({ default: false })
    isPijetkretek: boolean

    @OneToMany(() => Invoice, (invoice) => invoice.seller, {
        onDelete : "NO ACTION",
        onUpdate : "NO ACTION"
    })
    invoices: Invoice[]

    @OneToMany(() => Rating, (rating) => rating.seller, {
        onDelete : "NO ACTION",
        onUpdate : "NO ACTION"
    })
    ratings: Rating[]

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date
}
