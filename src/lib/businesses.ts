import { reactive } from "vue";
import airtable from "./airtable";

export const businesses = reactive<{
  loading: boolean;
  data: Business[];
}>({
  loading: true,
  data: [],
});

export async function fetchBusinesses() {
  businesses.loading = true;
  try {
    const { data } = await airtable.get("/tbly2E2hVOKLJCYVT", {
      params: {
        view: "AppView",
      },
    });

    businesses.data = data.records;
  } catch (error) {
    console.error(error);
  } finally {
    businesses.loading = false;
  }
}
