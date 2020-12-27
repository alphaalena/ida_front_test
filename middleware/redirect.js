import { categoriesRootUri } from '~/config';

export default function({ route, redirect }) {
  const defaultUri = `/${categoriesRootUri}/1`;
  if (route.name !== 'categories-categoryId') {
    redirect(defaultUri);
  }
}
