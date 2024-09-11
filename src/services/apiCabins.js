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

export async function createEditCabin(newCabin , id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath 
  ? newCabin.image 
  : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  //create/edit cabin
  let query = supabase.from("cabin");
  //create cabin if no id is provided
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }

  //edit cabin if id is provided
  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }
  const { data, error } = await query.select().single();

  if (error) {
    throw new Error(error.message);
  }

  //upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //delete cabin if there was a error
  if (storageError) {
    await supabase.from("cabin").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(`Image couldn't be uploaded`);
  }

  return data;
}

