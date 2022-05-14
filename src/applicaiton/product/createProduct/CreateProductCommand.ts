export class CreateProductCommand {
  constructor(
    public readonly name: string,
    public readonly description: string,
  ) {}
}
