export interface IFavoriteService<T> {
  addToFavorite(item: T): boolean | Error;
  getFavorites(): Array<T>;
  removeFavorite(id: string): boolean | Error;
}
