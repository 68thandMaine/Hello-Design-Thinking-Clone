export class User {
  public newsletter_subscription: boolean = false;
  constructor(
    public first_name: string,
    public last_name: string,
    public company_name: string,
    public job_title: string,
    public email: string,
    public password: string,
    public confirm_pWord: string = ""
  ) {}
}
