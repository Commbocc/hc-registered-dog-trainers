import { reactive } from "vue";
import airtable from "./airtable";

export const trainers = reactive<{
  loading: boolean;
  data: Trainer[];
}>({
  loading: true,
  data: [],
});

export async function fetchTrainers() {
  trainers.loading = true;
  try {
    const { data } = await airtable.get("/tblEQkoZCBZ4lRjlm", {
      params: {
        view: "AppView",
      },
    });

    trainers.data = data.records;
  } catch (error) {
    console.error(error);
  } finally {
    trainers.loading = false;
  }
}
