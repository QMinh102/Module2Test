export class Lover {
    private _loverID: string;
    private _loverName: string;
    private _loverZodiac: string;
    private _loverHomeTown: string;
    private _loverBirthYear: number;
    private _loverHobby: string;


    constructor(loverID: string, loverName: string, loverZodiac: string, loverHomeTown: string, loverBirthYear: number, loverHobby: string) {
        this._loverID = loverID;
        this._loverName = loverName;
        this._loverZodiac = loverZodiac;
        this._loverHomeTown = loverHomeTown;
        this._loverBirthYear = loverBirthYear;
        this._loverHobby = loverHobby;
    }

    getLoverID(): string {
        return this._loverID;
    }

    setLoverID(loverID: string) {
        this._loverID = loverID;
    }

    getLoverName(): string {
        return this._loverName;
    }

    setLoverName(loverName: string) {
        this._loverName = loverName;
    }

    getLoverZodiac(): string {
        return this._loverZodiac;
    }

    setLoverZodiac(loverZodiac: string) {
        this._loverZodiac = loverZodiac;
    }

    getLoverHomeTown(): string {
        return this._loverHomeTown;
    }

    setLoverHomeTown(loverHomeTown: string) {
        this._loverHomeTown = loverHomeTown;
    }

    getLoverBirthYear(): number {
        return this._loverBirthYear;
    }

    setLoverBirthYear(loverBirthYear: number) {
        this._loverBirthYear = loverBirthYear;
    }

    getLoverHobby(): string {
        return this._loverHobby;
    }

    setLoverHobby(loverHobby: string) {
        this._loverHobby = loverHobby;
    }
}