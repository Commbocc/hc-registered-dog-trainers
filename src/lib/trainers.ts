import { reactive } from "vue";
import airtable from "./airtable";

export const trainers = reactive<{
  loading: boolean;
  data: Trainer[];
}>({
  loading: true,
  data: [],
});

export async function fetchTrainers(offset?: string) {
  trainers.loading = true;
  try {
    const { data } = await airtable.get("/tblEQkoZCBZ4lRjlm", {
      params: {
        view: "AppView",
        offset: offset,
      },
    });

    if (data.offset) {
      fetchTrainers(data.offset);
    }

    trainers.data.push(...data.records);
  } catch (error) {
    console.error(error);
  } finally {
    trainers.loading = false;
  }
}
