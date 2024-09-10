import supabase, { supabaseUrl } from "./supabase";

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

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
  const { data, error } = await supabase.from("cabin").insert([{...newCabin, image: imagePath}]);

  if (error) {
    throw new Error(`Cabins couldn't be created`);
  }

  //upload image
  const { error: storageError } = await supabase.storage
  .from('cabin-images')
  .upload(imageName, newCabin.image);

  //delete cabin if there was a error
  if(storageError) {
    await supabase.from("cabin").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(`Image couldn't be uploaded`);
  }


}

export async function updateCabin(cabin) {
  const { data, error } = await supabase.from("cabin").update([newCabin]);

  if (error) {
    throw new Error(`Cabins couldn't be deleted`);
  }
}
