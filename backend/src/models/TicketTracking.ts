import {
    Table,
    Column,
    CreatedAt,
    UpdatedAt,
    Model,
    PrimaryKey,
    ForeignKey,
    BelongsTo,
    AutoIncrement
  } from "sequelize-typescript";
  
  import User from "./User";
  import Ticket from "./Ticket";
  import Whatsapp from "./Whatsapp";
  
  @Table({
    tableName: "TicketTracking"
  })
  class TicketTracking extends Model<TicketTracking> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @ForeignKey(() => Ticket)
    @Column
    ticketId: number;
  
    @BelongsTo(() => Ticket)
    ticket: Ticket;
  
  
    @ForeignKey(() => Whatsapp)
    @Column
    whatsappId: number;
  
    @BelongsTo(() => Whatsapp)
    whatsapp: Whatsapp;
  
    @ForeignKey(() => User)
    @Column
    userId: number;
  
    @Column
    rated: boolean;
  
    @BelongsTo(() => User)
    user: User;
  
    @CreatedAt
    createdAt: Date;
  
    @UpdatedAt
    updatedAt: Date;
  
    @Column
    startedAt: Date;
  
    @Column
    queuedAt: Date;
  
    @Column
    closedAt: Date;
  
    @Column
    finishedAt: Date;
  
    @Column
    ratingAt: Date;
  }
  
  export default TicketTracking;