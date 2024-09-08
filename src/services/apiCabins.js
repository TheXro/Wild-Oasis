import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabin").select("*");

  if (error) {
    console.log(error);
    throw new Error(`Cabins couldn't be loaded`);
  }
  return data;
}

export async function deleteCabin(id) {
  console.log(id);
  const { data, error } = await supabase.from("cabin").delete().eq("id", id);

  if (error) {
    throw new Error(`Cabins couldn't be deleted`);
  }
  return data;
}
