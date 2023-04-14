import { RGBTuple } from "../types";

export default class Tile {
  private _color: RGBTuple;
  public readonly row: number;
  public readonly col: number;
  public target: RGBTuple;
  private _difference: number;

  constructor(row: number, col: number, target: RGBTuple = [255, 255, 255]) {
    this.row = row;
    this.col = col;
    this._color = [0, 0, 0];
    this.target = target;
    this._difference =
      (1 / 255) *
      Math.sqrt(3) *
      Math.sqrt(
        Math.pow(this.target[0] - this._color[0], 2) +
          Math.pow(this.target[1] - this._color[1], 2) +
          Math.pow(this.target[2] - this._color[2], 2)
      );
  }

  public getColor(): RGBTuple {
    return this._color;
  }

  public setColor(color: RGBTuple): void {
    this._color = color;
  }

  public getRow(): number {
    return this.row;
  }

  public getCol(): number {
    return this.col;
  }

  public getDifference(): number {
    return this._difference;
  }

}
