import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withProviders } from '../../../utils/mock-component.tsx';
import { mockUserDetails } from '../../../utils/mock-data.ts';
import { extractActionsTypes } from '../../../utils/mock-reducer.ts';
import { signOut } from '../../../store/api-actions.ts';
import { expect } from 'vitest';
import { StatusCodes } from 'http-status-codes';
import { AuthorizationStatus, AppRoute } from '../../../const/const.ts';
import UserBlock from './user-block.tsx';

describe('Component: UserBlock', () => {
  const mockUserData = mockUserDetails();

  it('should display sign in link for guests', async () => {
    const { component, mockHistory } = withProviders(<UserBlock />,
      {
        user: {
          ...mockUserData,
          authorizationStatus: AuthorizationStatus.Unauthorized,
        }
      });
    render(component);
    const link = screen.getByRole('link', { name: /sign in/i });
    expect(link).toBeInTheDocument();
    await userEvent.click(link);
    expect(mockHistory.location.pathname).toBe(AppRoute.SignIn);
  });

  it('should display sign out button for authorized users', async () => {
    const { component, mockStore, mockAxiosAdapter } = withProviders(<UserBlock />,
      {
        user: {
          ...mockUserData,
          authorizationStatus: AuthorizationStatus.Authorized,
        }
      });
    mockAxiosAdapter.onDelete(/\/logout/).reply(StatusCodes.OK);
    render(component);

    const signOutElement = screen.getByText(/sign out/i);
    expect(signOutElement).toBeInTheDocument();
    await userEvent.click(signOutElement);
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      signOut.pending.type,
      signOut.fulfilled.type,
    ]);
  });

  it('should display avatar for authorized users', async () => {
    const { component, mockHistory } = withProviders(<UserBlock />,
      {
        user: {
          ...mockUserData,
          authorizationStatus: AuthorizationStatus.Authorized,
        }
      });
    render(component);

    const avatar = screen.getByRole('img');
    expect(avatar).toBeInTheDocument();
    await userEvent.click(avatar);
    expect(mockHistory.location.pathname).toBe(AppRoute.MyList);
  });
});
