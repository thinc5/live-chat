import { Command } from './Command.d.ts';
import { Message } from '../chatConnections/Message.d.ts';
import { AbstractCommand } from './AbstractCommand.ts';



export class BassCommand extends AbstractCommand implements Command {
    constructor() {
        super();
        this.command = 'bass';
    }

    // Custom match string to parse the bass commands.
    public matchString(body: string): boolean {
        if (body.substr(0, this.command.length) != this.command) {
            return false;
        }
        if (body.length != this.command.length + 1) {
            return false;
        }
        const contender: string = body.substr(this.command.length, 1);
        if (contender !== '+' && contender !== '-') {
            return false;
        }
        return true;
    }

    public act(message: Message) {
        const action: string = message.getBody().substr(this.command.length + 1, 1);
        let reply: string = "";
        switch (action) {
            case '+':
                reply = 'Bass Boosted';
                break;
            case '-':
                reply = 'Bass Reduced';
                break;
        }
        message.reply(true, reply);
    }
}
