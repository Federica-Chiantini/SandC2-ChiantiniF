export type BLOGTipo = {
  posts: POST[],
  postCategories: POSTCATEGORY[]
}

export type POST = {
  id: number,
  title: string,
  body: string,
  userId: number,
  date: number,
  category: string
}

export type POSTCATEGORY = {
  id: string,
  title: string
}