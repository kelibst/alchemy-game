import { RGBTuple } from "../../types";

export default class Source {
  private _color: RGBTuple;
  public readonly row: number;
  public readonly col: number;

  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
    this._color = [0, 0, 0];
  }

  public getColor(): RGBTuple {
    return this._color;
  }

  public setColor(color: RGBTuple) {
    this._color = color;
  }
}
