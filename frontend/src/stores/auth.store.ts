import { defineStore } from "pinia";
import api from "../services/api";
import type { User, AuthResponse } from '../types/user.types';

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || "",
    user: null as User | null,
  }),

  actions: {
    async login(email: string, password: string) {
      const { data } = await api.post<AuthResponse>("/auth/login", {
        email,
        password,
      });

      this.token = data.token;
      this.user = data.user;

      localStorage.setItem("token", data.token);
    },

    logout() {
      this.token = "";
      this.user = null;
      localStorage.removeItem("token");
    },
  },
});
