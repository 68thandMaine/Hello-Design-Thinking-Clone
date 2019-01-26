export class User {
  public newsletter_subscription: boolean = false;
  public confirm_pWord: string = "";
  public id: number = 0;
  constructor(
    public first_name: string,
    public last_name: string,
    public company_name: string,
    public job_title: string,
    public email: string,
    public password: string
  ) {}
}
