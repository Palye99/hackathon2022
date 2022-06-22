export class JwtResponse{

  public jwttoken: string;

  constructor(jwttoken: string) {
    this.jwttoken = jwttoken;
  }
}
