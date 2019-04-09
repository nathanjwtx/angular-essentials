import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StarWarsService {
    private characters = [
        { name: 'Luke Skywalker', side: ''},
        { name: 'Darth Vader', side: ''}
    ];

    private logService: LogService;

    constructor(logService: LogService) {
        this.logService = logService;
    }

    getCharacters(chosenList) {
        if (chosenList === 'all') {
          return this.characters.slice();
        }
        return this.characters.filter((char) => {
          return char.side === chosenList;
        });
    }

    onSideChosen(charInfo) {
        const pos = this.characters.findIndex((char) => {
            return char.name === charInfo.name;
        });
        this.characters[pos].side = charInfo.side;
        this.logService.writeLog('Changed side of ' + charInfo.name + ', new side: ' + charInfo.side);
    }

    addCharacter(name: string, side: string) {
        const pos = this.characters.findIndex((char) => {
            return char.name === name;
        });
        if (pos === -1) {
            const newChar = { name: name, side: side};
            this.characters.push(newChar);
        }
    }
}
