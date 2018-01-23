interface IReducerState {
  loading: boolean;
  data: any[],
}

interface IPage {
  _id: string;
  title: string;
  description: string;
  name: string;
  content: string;
  thumb: string;
  tags: string[];
  rubrics: string[];
  slug: string;
  status: number;
  createdAt: string;
  updatedAt: string;
}
