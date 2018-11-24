import { Destiny } from './Destiny.model';

export class FuckOff {
    id?: string;
    from: string;
    to: string;
    message?: string;
    destiny: Destiny = new Destiny();
    fav: boolean;
    outsider: string;
}
