import { RouteObject, useRoutes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import RequireAuth from 'providers/RequireAuth';
import Screen from 'screens';
import { PublicPath, ProtectedPath } from 'routes/paths';

const Routes = () => {
  const routes: RouteObject[] = [
    {
      path: PublicPath.Login,
      element: <Screen.Login />,
    },

    {
      element: <RequireAuth />,
      children: [
        {
          path: ProtectedPath.ROOT,
          element: <Layout />,
          children: [
            { path: ProtectedPath.Favorites, element: <Screen.Favorites /> },
            { path: ProtectedPath.Home, element: <Screen.Forecast /> },
          ],
        },
      ],
    },
  ];

  return useRoutes(routes);
};

export default Routes;
