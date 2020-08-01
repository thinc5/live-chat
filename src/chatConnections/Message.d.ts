export interface Message {
  getUsername(): string;
  getBody(): string;
  reply(mention: boolean, body: string): boolean;
}
