import { ref, onMounted } from "vue";
import { getDashboard } from "@/services/dashboard/dashboard.service";
import type { DashboardData } from "@/types/dashboard.types";

export const useDashboard = () => {
  const data = ref<DashboardData | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchDashboard = async () => {
    try {
      loading.value = true;
      error.value = null;

      const res = await getDashboard();
      data.value = res;

    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = err.message;
      } else {
        error.value = "Error al cargar dashboard";
      }
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchDashboard);

  return {
    data,
    loading,
    error,
    fetchDashboard,
  };
};
