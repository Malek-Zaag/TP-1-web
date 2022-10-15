import { Status } from './status';
import { v4 as Id } from 'uuid';

export class TodoModel {
  public id;
  public name: string;
  public create_date: Date;
  public statut: string;
  public description: string;

  constructor() {
    this.id = Id();
    this.name = '';
    this.create_date = new Date();
    this.statut = Status.waiting;
    this.description = '';
  }
}
