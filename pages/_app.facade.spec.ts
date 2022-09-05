import { renderHook, waitFor } from "@testing-library/react";

import { handlerCreator } from "~api/mocks/handlers/get-current-user";
import { server } from "~api/mocks/server";
import { TestingLibrary } from "~shared/modules";

import * as Facade from "./_app.facade";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("facade", () => {
  describe("useAuth", () => {
    it("when ", async () => {
      const { store, wrapper } = TestingLibrary.createWraper();

      renderHook(Facade.useAuth, {
        wrapper,
      });

      await waitFor(() => {
        expect(store.getState().application.user.permissions.isLoggedIn).toBe(
          true
        );
      });
    });

    it("", async () => {
      server.use(handlerCreator((req, res, ctx) => res(ctx.status(500))));
      const { store, wrapper } = TestingLibrary.createWraper();

      renderHook(Facade.useAuth, {
        wrapper,
      });

      await waitFor(() => {
        expect(store.getState().application.user.permissions.isLoggedIn).toBe(
          false
        );
      });
    });
  });
});
