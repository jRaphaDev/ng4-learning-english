export class Heart {

  constructor(
    public full: boolean,
    public urlFull: string = '/assets/coracao_cheio.png',
    public urlEmpty: string = '/assets/coracao_vazio.png'
  ){}

  public isHeart(): string {
    return (this.full) ? this.urlFull : this.urlEmpty;
  }
}