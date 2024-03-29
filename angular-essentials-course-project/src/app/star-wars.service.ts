import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class StarWarsService {
    private characters = [
        { name: 'Luke Skywalker', side: ''},
        { name: 'Darth Vader', side: ''}
    ];

    private logService: LogService;
    charactersChanged = new Subject<void>();
    http: Http;

    constructor(logService: LogService, http: Http) {
        this.logService = logService;
        this.http = http;
    }

    fetchCharacters() {
        this.http.get('https://swapi.co/api/people/').pipe(
        map((response: Response) => {
            const data = response.json();
            const extractedChars = data.results;
            const chars = extractedChars.map((char) => {
                return {name: char.name, side: ''};
            });
            return chars;
        }))
        .subscribe(
            (data) => {
                console.log(data);
                this.characters = data;
                this.charactersChanged.next();
            });
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
        // emit the event for the subject
        this.charactersChanged.next();
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
