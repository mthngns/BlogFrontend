import { api } from "@/redux/api";
import { User } from "@/app/lib/types";
import { END_POINTS } from "@/app/lib/end-points";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => END_POINTS.authors,
    }),

    login: builder.mutation<User | null, { email: string; password: string }>({
      async queryFn({ email, password }, _queryApi, _extraOptions, fetchWithBQ) {
        const result = await fetchWithBQ(END_POINTS.authors);
        
        if (result.error) return { error: result.error };
        
        const users = result.data as User[];
        
        const user = users.find(
          (u) => u.email === email && u.password === password
        );

        return user ? { data: user } : { data: null };
      },
    }),

    createUser: builder.mutation<User, Omit<User, 'id'>>({
      query: (newUser) => ({
        url: END_POINTS.authors,  
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllUsersQuery, useLoginMutation, useCreateUserMutation } = userApi;
